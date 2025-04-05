<form action="#" method="post">
    @csrf
    <input type="hidden" name="method"
           value="{{$gateway->method}}">
    <input type="hidden" name="test_amount"
           value="{{$amount}}">
    <button type="button" class="{{$type!='deposit' && $type!='booking'?'Payment_btn':''}}" onclick="openJsCheckout()">
        <img class="w-100"
             src="{{asset($gateway->logo)}}"
             alt="">
    </button>

    <div class="modal fade admin-query" id="showQRModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header justify-content-end">
                    {{-- <h4 class="modal-title">{{__('common.Delete')}} {{__('student.Student')}} </h4> --}}
                    <button type="button" class="close" data-dismiss="modal"><i
                            class="ti-close "></i></button>
                </div>

                <div class="modal-body">
                    <form action="" method="post">
                        @csrf

                        <div class="text-center">
                            <h4 class="font-weight-bold mb-4">
                                Vui lòng mở app trên điện thoại, quét mã QR dưới đây để thanh toán.
                            </h4>
                            <div class="text-center mb-4">
                                <i id="loading" class="fa fa-spinner fa-spin fa-3x fa-fw site_image_spinner"></i>

                                <img
                                    src=''
                                    alt="QR Code"
                                    class="d-none"
                                    style="margin: 0 auto;"
                                    id="qrCodeImage"
                                    width="200px" 
                                    height="200px"
                                    onError="this.src='https://me-qr.com/static/pages/qr-code-checking-img/il1.png'"
                                />
                            </div>
                            <strong>Số tiền cần thanh toán: {{ getPriceFormat($amount) }}</strong>
                        </div>

                        <input type="hidden" name="bank_bill_id" value="{{ $checkout->billing->bank_bill_id ?? '' }}" id="bankBillId">
                        <div class="mt-40 d-flex justify-content-between">
                            {{-- <button type="button" class="primary-btn tr-bg"
                                    data-dismiss="modal">{{__('common.Cancel')}}</button>

                            <button class="primary-btn fix-gr-bg"
                                    type="submit">{{__('common.Delete')}}</button> --}}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</form>

<script type="text/javascript">
    function openJsCheckout() {
        $("#showQRModal").modal('show');
    }

    $("#showQRModal").on('show.bs.modal', function () {
        createQR();
    });

    $("#showQRModal").on('hide.bs.modal', function () {
        $('#qrCodeImage').addClass('d-none');
        $('#qrCodeImage').attr('src', '');
    });

    function createQR() {
        $('#loading').removeClass('d-none');

        $.ajax({
            type: "POST", 
            url: "{{ route('hdbank.create_qr') }}", 
            data: {
                'bill_id': $('#bankBillId').val(),
            }, 
            success: function (data) {
                $('#qrCodeImage').removeClass('d-none');
                $('#qrCodeImage').attr('src', `data:image/png;base64,${data.data.qrCode}`);

                // return;
                // for test
                // setTimeout(() => {
                //     $.ajax({
                //         type: "POST", 
                //         url: "{{ route('hdbank.instant_payment_notification') }}", 
                //         data: {
                //             'data': 'eyJtZXJjaGFudElkIjoiNzkwMzIiLCJpbnZvaWNlSWQiOiJCTi0wMDExIiwidHJhbnNhY3Rpb25JZCI6IlhYWFhYWFhYWDEiLCJzdGF0dXMiOiIwMCIsInBhaWRBbW91bnQiOjEwMDAwLCJ0cmFuc2FjdGlvbkFtb3VudCI6MTAwMDAsInRyYW5zYWN0aW9uRGVzY3JpcHRpb24iOiJYWFhYWFhYWFgiLCJwYWlkRGVzY3JpcHRpb24iOiJYWFhYWFhYWFgiLCJwYWlkVGltZSI6MjAyMzA5MjkxMDMzMTEsImFkZGl0aW9uYWxEYXRhIjp7InNlcnZpY2VDb2RlIjoiS0RBVUJVTkciLCJwYXRpZW50Q29kZSI6IlRFU1QxMjMiLCJwYXRpZW50TmFtZSI6IlbDtSBEdXkgQ8awxqFuZyIsImRlc2NyaXB0aW9uIjoiTcO0IHThuqMifX0=',
                //             'sign': 'c97cc48a0f1525aa58745afa61f67a372463c4e4b9d131129f44b4c7a5024086'
                //         },
                //         success: function (data) {
                //             console.log(data);
                            
                //         }, 
                //         error: function (data) {
                //             toastr.error("Something went wrong!", "Error Alert");
                //         },
                //     });
                // }, 4000);
            }, 
            error: function (data) {
                toastr.error("Something went wrong!", "Error Alert");
            },
            complete: function () {
                $('#loading').addClass('d-none');
            }
        });
    }
</script>
