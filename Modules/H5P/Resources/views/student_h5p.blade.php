@extends('backend.master')
@section('mainContent')

    {!! generateBreadcrumb() !!}



    <section class="mt-20 admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            <div class="row mt-40">
                <div class="col-lg-12">
                    <div class="box_header">
                        <div class="main-title mb_xs_20px">
                            <h3 class="mb-0 mb_xs_20px"> {{_trans('report.H5P Report')}}


                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="QA_section QA_section_heading_custom check_box_table">
                <div class="QA_table ">
                    <div class="">
                        <table id="lms_table" class="table  table-data  dataTable  h5pReportTable">
                            <thead>
                            <tr>
                                <th> {{__('common.SL')}} </th>
                                <th> {{__('quiz.Student')}} </th>
                                <th>{{__('courses.Course')}}</th>
                                <th class="text-center">{{_trans('common.Total H5P')}}</th>
                                <th> {{__('common.Action')}} </th>
                            </tr>
                            </thead>
                            <tbody>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection
@push('scripts')
    <script src="{{asset('/')}}/Modules/Quiz/Resources/assets/js/quiz.js{{assetVersion()}}"></script>


    <script>
        let table = $('.h5pReportTable').DataTable({
            bLengthChange: true,
            "lengthChange": true,
            "lengthMenu": [[10, 25, 50, 100, 100000], [10, 25, 50, 100, "All"]],
            "bDestroy": true,
            stateSave: true,
            processing: true,
            serverSide: true,
            order: [[0, "desc"]],
            "ajax": $.fn.dataTable.pipeline({
                url: '{!! route('h5p.report.data') !!}',
                pages: 5 // number of pages to cache
            }),
            columns: [
                {data: 'DT_RowIndex', name: 'id'},
                {data: 'user.name', name: 'user.name'},
                {data: 'course.title', name: 'course.title'},
                {data: 'lesson', name: 'lesson', orderable: false, searchable: false, className: 'text-center'},
                {data: 'action', name: 'action', orderable: false, searchable: false},

            ],
            language: {
                emptyTable: "{{ __("common.No data available in the table") }}",
                search: "<i class='ti-search'></i>",
                searchPlaceholder: '{{ __("common.Quick Search") }}',
                paginate: {
                    next: "<i class='ti-arrow-right'></i>",
                    previous: "<i class='ti-arrow-left'></i>"
                }
            },
            dom: 'Blfrtip',
            buttons: [
                {
                    extend: 'copyHtml5',
                    text: '<i class="far fa-copy"></i>',
                    title: $("#logo_title").val(),
                    titleAttr: '{{ __("common.Copy") }}',
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    }
                },
                {
                    extend: 'excelHtml5',
                    text: '<i class="far fa-file-excel"></i>',
                    titleAttr: '{{ __("common.Excel") }}',
                    title: $("#logo_title").val(),
                    margin: [10, 10, 10, 0],
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    },

                },
                {
                    extend: 'csvHtml5',
                    text: '<i class="far fa-file-alt"></i>',
                    titleAttr: '{{ __("common.CSV") }}',
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    }
                },
                {
                    extend: 'pdfHtml5',
                    text: '<i class="far fa-file-pdf"></i>',
                    title: $("#logo_title").val(),
                    titleAttr: '{{ __("common.PDF") }}',
                    exportOptions: {
                        columns: ':visible',
                        columns: ':not(:last-child)',
                    },
                    orientation: 'landscape',
                    pageSize: 'A4',
                    margin: [0, 0, 0, 12],
                    alignment: 'center',
                    header: true,
                    customize: function (doc) {
                        doc.content[1].table.widths =
                            Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                    }

                },
                {
                    extend: 'print',
                    text: '<i class="fa fa-print"></i>',
                    titleAttr: '{{ __("common.Print") }}',
                    title: $("#logo_title").val(),
                    exportOptions: {
                        columns: ':not(:last-child)',
                    }
                },
                {
                    extend: 'colvis',
                    text: '<i class="fa fa-columns"></i>',
                    postfixButtons: ['colvisRestore']
                }
            ],
            columnDefs: [{
                visible: false
            },
                {responsivePriority: 1, targets: 0},
                {responsivePriority: 2, targets: 2},
                {responsivePriority: 2, targets: -2},
            ],
            responsive: true,
        });

        $('#lms_table_info').append('<span id="add_here"> new-dynamic-text</span>');
    </script>
@endpush
