@extends('backend.master')
@section('mainContent')

    {!! generateBreadcrumb() !!}



    <section class="mt-20 admin-visitor-area up_st_admin_visitor">
        <div class="container-fluid p-0">
            <div class="row mt-40">
                <div class="col-lg-12">
                    <div class="box_header">
                        <div class="main-title mb_xs_20px">
                            <h3 class="mb-0 mb_xs_20px">{{__('courses.Lesson List')}} {{__('setting.For')}}
                                "{{$course->title}}"


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
                            <th> {{__('common.Name')}} </th>
                            {{-- <th> {{_trans('report.H5P Info')}} </th> --}}
                            <th>{{_trans('report.Score')}}/{{_trans('report.Total Score')}} </th>
                            <th> {{_trans('quiz.Percentage')}} </th>
                            <th> {{_trans('quiz.Duration')}} </th>
                            <th> {{_trans('quiz.Attempted')}} </th>
                            {{--                            <th> {{__('common.Action')}} </th>--}}
                        </tr>
                        </thead>
                        <tbody>
                        @php
                            $i=0;
                        @endphp
                        @foreach($lessons as $key=>$lesson)
                            @php
                                $h5p_report= $lesson->h5pReport($user_id);
                            @endphp
                            <tr>
                                <td>{{++$i}}</td>
                                <td>{{$lesson->name}}</td>
                                {{-- <td>
                                    @php
                                       $h5p= $lesson->h5pContent->h5p;
                                       $h5p = json_decode($h5p);
                                       $title= $h5p->title;
                                    @endphp
                                    <p>{{_trans('common.Title')}}: {{@$h5p->title}}, </p>
                                    <p>{{_trans('common.Language')}}: {{@$h5p->defaultLanguage}}, </p>
                                    <p>{{_trans('common.Library')}}: {{@$h5p->mainLibrary}}, </p>
                                    <p>{{_trans('common.License')}}: {{@$h5p->license}}, </p>
                                </td> --}}
                                <td>
                                    @if($h5p_report)
                                        {{$h5p_report->score}}/{{$h5p_report->max_score}}
                                    @else
                                        0/0
                                    @endif
                                </td>
                                <td>
                                    @if($h5p_report)
                                        {{getPercentage($h5p_report->scaled,1)}}%
                                    @else
                                        0%
                                @endif
                                <td>
                                    @if($h5p_report)
                                        {{isoToReglar(@$h5p_report->duration)}}
                                    @else
                                        0
                                    @endif
                                </td>
                                <td>
                                    @if($h5p_report)
                                        {{$h5p_report->attempt}}
                                    @else
                                        0
                                    @endif
                                </td>
                                {{--                                <td>--}}
                                {{--                                    <!-- shortby  -->--}}
                                {{--                                    <div class="dropdown CRM_dropdown">--}}
                                {{--                                        <button class="btn btn-secondary dropdown-toggle" type="button"--}}
                                {{--                                                data-toggle="dropdown"--}}
                                {{--                                                aria-haspopup="true"--}}
                                {{--                                                aria-expanded="false">--}}
                                {{--                                            {{ __('common.Action') }}--}}
                                {{--                                        </button>--}}
                                {{--                                        <div class="dropdown-menu dropdown-menu-right">--}}

                                {{--                                            <a class="dropdown-item details_show"--}}
                                {{--                                               href="{{route('h5p.report.lesson-details',[$user_id,$lesson->id])}}">{{__('common.Details')}}</a>--}}
                                {{--                                        </div>--}}
                                {{--                                    </div>--}}
                                {{--                                    <!-- shortby  -->--}}
                                {{--                                </td>--}}
                            </tr>
                        @endforeach

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>

@endsection
@push('scripts')

@endpush
