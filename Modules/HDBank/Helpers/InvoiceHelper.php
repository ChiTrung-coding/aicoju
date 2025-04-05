<?php

namespace Modules\HDBank\Helpers;

use App\BillingDetails;
use App\Http\Controllers\PaymentController;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Notification;
use Toastr;
use UtilityLog;

class InvoiceHelper
{
    public static function create_invoice($receipt)
    {
        try {
            $sumInvoiceDetails = $receipt->purchase_price;

            $invoiceDetails = [
                [
                    'serviceCode' => 'DEFAULT',
                    'amount' => $sumInvoiceDetails
                ]
            ];

            $data = [
                'merchantId' => config('hdbank.const.merchant_id'), // Mã Trường học/Đối tác
                'invoiceId' => $receipt->tracking, // Mã hóa đơn (đối tác)
                'type' => 'vietqr', // Loại mã QR. Cố định: "vietqr" (hiện tại chỉ cung cấp VietQR)
                'transactionTime' => time(), // thời gian phát sinh giao dịch định dạng Unix time(UTC). Thời gian phát sinh chỉ cho phép cách thời điểm hiện tại 1 phút.
                'ipn' => route('hdbank.instant_payment_notification', ['user_id' => $receipt->user->id]),
                'transactionDescription' => 'Thanh toán học phí',
                'classCode' => 'DEFAULT',
                'gradeCode' => 'DEFAULT',
                'studentCode' => 'STUDENT__'.$receipt->user->id,
                'studentName' => $receipt->user->name,
                'phone' => $receipt->user->phone, // Số điện thoại phụ huynh
                'dateOfBirth' => Carbon::parse($receipt->user->dob ?? now())->format('d/m/Y'),
                'invoiceDetails' => $invoiceDetails
            ];            

            $payload = self::request_payload($data);

            // send request
            $url = config('hdbank.const.bank_url') . 'invoice';

            $response = Http::withHeader('Content-Type', 'application/json')
                ->post($url, $payload);

            if ($response->successful()) {
                UtilityLog::writeLog('info', 'Create invoice success', null, $data);

                return $response->json();
            }

            return null;

        } catch (\Throwable $th) {
            UtilityLog::writeLog('error', 'Create invoice error', $th);

            return null;
            // return ApiResponse::error(message: $th->getMessage());

        }

    }

    public static function request_payload(string|array $data)
    {
        $encoded = base64_encode(json_encode($data));
        $hash = self::hash_data($encoded);

        return [
            'data' => $encoded,
            'sign' => $hash
        ];
    }

    public static function create_qr(array $data_bill_id)
    {
        try {
            $payload = self::request_payload($data_bill_id);

            // send request
            $url = config('hdbank.const.bank_url') . 'qrCode';

            $response = Http::withHeader('Content-Type', 'application/json')
                ->post($url, $payload);

            if ($response->successful()) {
                $json = $response->json();

                UtilityLog::writeLog('info', 'Create qr code success', null, $json);

                return [
                    'data' => [
                        'qrCode' => $json['data']['qrCode'],
                    ],
                    'code' => '00'
                ];
            }

            return null;

        } catch (\Throwable $th) {
            UtilityLog::writeLog('error', 'Create qr code error', $th);
            
            return null;
            // return ApiResponse::error(message: $th->getMessage());

        }
    }

    public static function hash_data(string $data)
    {
        return hash_hmac('sha256', $data, config('hdbank.const.bank_secret_key'));
    }

    /**
     * IPN (instant payment notification): handle data after payment
     */
    public static function instant_payment_notification(string $data, string $sign)
    {
        try {
            $data_decode = json_decode(base64_decode($data), true);

            if (!$data_decode) {
                UtilityLog::writeLog('error', 'Cannot decode data', null, ['data' => $data]);

                return null;
            }

            $hash_data = self::hash_data($data);

            if ($hash_data !== $sign) {
                UtilityLog::writeLog('error', 'Sign not match', null, ['hash_data' => $hash_data, 'sign' => $sign]);

                return null;
            }

            $code = null;

            if ($data_decode['status'] == config('hdbank.const.status.bank.paid')) {
                $code = 'paid';
            } else if ($data_decode['status'] == config('hdbank.const.status.bank.verify')) {
                $code = 'verify';

                UtilityLog::writeLog('error', 'Paid but amount not same', null, $data_decode);

                return null;
            }

            if (!$code) {
                Log::error(sprintf('[%s][%s] %s', __CLASS__, __FUNCTION__, 'status invalid'));

                return null;
            }

            DB::transaction(function () use ($code, $data_decode) {
                $paymentController = new PaymentController();

                $payWithHDBank = $paymentController->payWithGateWay($data_decode, "HDBank", $user = null, session()->get('invoice'));

                if (! $payWithHDBank) {
                    UtilityLog::writeLog('error', 'Error when save to DB', null, $data_decode);

                    throw new \Exception('Error when save to DB');
                }

                $payment_info = [
                    'merchantId' => $data_decode['merchantId'], // Mã trường học
                    'invoiceId' => $data_decode['invoiceId'], // Mã hóa đơn
                    'transactionId' => $data_decode['transactionId'], // Mã giao dịch
                    'status_code' => $code,
                    'status' => 1,
                    'transactionAmount' => $data_decode['transactionAmount'], // Số tiền yêu cầu thanh toán. Làm tròn đến 2 kí tự thập phân.
                    'paidAmount' => $data_decode['paidAmount'], // Số tiền thanh toán thực tế từ khách hàng. Bằng null nếu chưa thanh toán. Làm tròn đến 2 kí tự thập phân
                    'paidTime' => $data_decode['paidTime'], // Thời gian chuyển khoản, định dạng yyyyMMddHHmmss (UTC)Ví dụ: 20230929103111. Bằng null nếu chưa thanh toán
                    'paidDescription' => $data_decode['paidDescription'], // Nội dung chuyển khoản thực tế từ khách hàng, Bằng null nếu chưa thanh toán
                    'transactionDescription' => $data_decode['transactionDescription'], // Nội dung chuyển khoản yêu cầu để tự động call ipn
                    'additionalData' => $data_decode['additionalData'], // Thêm dữ liệu khác,
                    'message' => 'Thanh toán thành công!',
                ];

                // Notification::send($bill->user->account, new PaymentSuccess($payment_info));

                $bill = BillingDetails::where('bank_bill_id', $data_decode['billId'])->first();

                if (! $bill) {
                    UtilityLog::writeLog('error', 'Bill not found', null, $data_decode);
                    throw new \Exception('Bill not found');
                }

                $user = User::find($bill->user_id);

                if (! $user) {
                    UtilityLog::writeLog('error', 'User not found', null, $data_decode);
                    throw new \Exception('User not found');
                }

                $payment_info['goto'] = self::routeDashboard($user->role_id);

                $fcm_token = $user->fcm_token_web;

                if (! $fcm_token) {
                    UtilityLog::writeLog('error', 'User fcm token not found', null, $data_decode);
                    throw new \Exception('User fcm token not found');
                }

                $tokens = [$fcm_token];

                // firebase - push notifications
                $notification = [
                    'title' => 'Giao dịch thành công!',
                    'body' => json_encode($payment_info),
                ];

                FirebaseHelper::push_notifications($tokens, $notification);

                UtilityLog::writeLog('info', 'Send notification', null, [
                    'notification' => $notification,
                    'tokens' => $tokens
                ]);
            });

            return $data_decode;
        } catch (\Throwable $th) {
            Log::error(sprintf('[%s][%s] %s', __CLASS__, __FUNCTION__, $th->getMessage()));
            return null;
        }
    }

    public static function routeDashboard($role_id)
    {
        if ($role_id == 3) {
            return route('studentDashboard');
        } else {
            return route('dashboard');
        }
    }
}