<?php


use Illuminate\Support\Facades\Route;
use Modules\HDBank\Http\Controllers\HDBankController;

Route::prefix('hdbank')->as('hdbank.')->middleware('auth')->group(function () {
    Route::resource('bankPayment', 'HDBankController')->middleware('RoutePermissionCheck:bankPayment.index');
    Route::post('/create-qr', [HDBankController::class, 'createQrCode'])->name('create_qr');
});

Route::prefix('hdbank')->as('hdbank.')->group(function () {
    Route::group(['prefix' => 'ipn'], function () {
        Route::post('/', [HDBankController::class, 'instantPaymentNotification'])->name('instant_payment_notification');
    });
});
