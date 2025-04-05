@extends('backend.master')
@section('mainContent')

    {!! generateBreadcrumb() !!}



    <section class="mt-20 admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            <div class="row mt-40">
                <div class="col-lg-12">
                    <div class="box_header">
                        <div class="main-title mb_xs_20px">
                            <h3 class="mb-0 mb_xs_20px">"{{$lesson->name}}
                                " {{__('common.Details')}} {{__('setting.For')}} "{{$user->name}}"


                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="QA_section QA_section_heading_custom check_box_table">
                <div class="QA_table ">

                    <table id="" class="table Crm_table_active3 scormReportTable">
                        <thead>
                        <tr>
                            <th> {{__('common.SL')}} </th>
                            <th> {{_trans('setting.Action')}} </th>
                            <th> {{_trans('common.Timestamp')}} </th>
                        </tr>
                        </thead>
                        <tbody>
                        @if($report)
                            @foreach($report->details as $key => $report)
                                <tr>
                                    <td>{{++$key}}</td>
                                    <td>{{$report->verb}}</td>
                                    <td>{{$report->created_at}}</td>
                                </tr>
                            @endforeach
                        @else
                            <tr>
                                <td colspan="100%" class="text-center">No Data Found</td>
                            </tr>
                        @endif
                        

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

@endsection
@push('scripts')

@endpush
