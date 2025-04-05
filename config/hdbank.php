<?php

return [
    'name' => 'HDBank',
    'const' => [
        'merchant_id' => env('MERCHANT_ID', ''),
        'status' => [
            'bank' => [
                'paid' => '00', // đã thanh toán, không thanh toán tiếp
                'unpaid' => '01', // chưa thanh toán/thanh toán lỗi
                'verify' => '10' // đã thanh toán, không khớp số tiền
            ]
        ],
        'bank_url' => env('BANK_URL', ''),
        'bank_secret_key' => env('BANK_SECRET_KEY', ''),
        'customer_name' => env('SCHOOL_NAME'),
    ],
];