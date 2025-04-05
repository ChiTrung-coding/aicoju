<?php

namespace Modules\HDBank\Http\Controllers;

use App\BillingDetails;
use Modules\HDBank\Helpers\InvoiceHelper;
use App\Traits\ImageStore;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use UtilityLog;

class HDBankController extends Controller
{
    use ImageStore;

    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {


    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return bool
     */
    public function store(Request $request)
    {

        
    }


    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {

        
    }


    public static function depositWithGateWay($amount, $user_id)
    {
        
    }

    public function instantPaymentNotification(Request $request) 
    {
        $request->validate([
            'data' => 'required|string',
            'sign' => 'required|string',
            'user_id' => 'required|exists:users,id',
        ]);

        $decode = base64_decode($request->sign, true);

        if (!$decode) {
            return response()->json(["message" => "Dữ liệu không hợp lệ, vui lòng thử lại!"], 404);
        }

        $result = InvoiceHelper::instant_payment_notification($request->data, $request->sign);

        if (!$result) {
            return response()->json(["message" => "Thanh toán không thành công, vui lòng thử lại!"], 500);
        }

        return response()->json(["message" => "Thanh toán thành công!"], 200);
    }

    public function createQrCode(Request $request)
    {
        $request->validate([
            'bill_id' => 'required|exists:billing_details,bank_bill_id',
        ]);

        $bill = BillingDetails::where('bank_bill_id', $request->bill_id)->first();

        if (!$bill) {
            UtilityLog::writeLog('error', 'Bill not found', null, [
                'billing' => $request->bill_id
            ]);

            return response()->json(["message" => "Bill not found"], 404);
        }

        $data_bill_id = [
            'billId' => $bill->bank_bill_id,
        ];

        $response = InvoiceHelper::create_qr($data_bill_id);

        if (!$response) {
            UtilityLog::writeLog('error', 'error when create qr code', null, $data_bill_id);

            return response()->json(["message" => "Error when create qr code"], 500);
        }

        if ($response['code'] == '00') {
            UtilityLog::writeLog('info', 'Create qr code successfully', null, $response['data']);

            return response()->json([
                'message' => 'Create qr code successfully',
                'data' => $response['data']
            ], 200);
        }

        return response()->json(["message" => "Error when create qr code"], 500);
    }
}
