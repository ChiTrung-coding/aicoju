@extends(theme('layouts.master'))
@section('title')
    {{Settings('site_title')  ? Settings('site_title')  : 'Infix LMS'}} | {{__('forum.Forum')}}
@endsection
@section('css')
    <link rel="stylesheet" href="{{asset('public/frontend/infixlmstheme/css/forum.css')}}{{assetVersion()}}">

@endsection
@section('js')
    <script src="{{asset('public/frontend/infixlmstheme/js/forum.js')}}{{assetVersion()}}"></script>
@endsection
<input type="hidden" id="forum_url" value="{{url('/forum')}}">

@section('mainContent')

    <x-breadcrumb :banner="$frontendContent->forum_banner"
                  :title="$frontendContent->forum_title"
                  :subTitle="$frontendContent->forum_sub_title"/>
    <style>
        .theme_search_field.style2 {
            width: 100%;
        }
    </style>

    <div class="fourm_area section_spacing4">
        <div class="container">
            <div class="row">
                <div class="col-xl-2">
                    <ul class="lession_lists mb_30 mt_114">

                        @if (isset($course_info->id))

                            <li><a href="{{route('forum.CourseForum',$course_info->id)}}"
                                   class="{{ routeIs('forum.CourseForum',$course_info->id)  ? 'active' : '' }}">{{@$course_info->title}}</a>
                            </li>

                            @foreach ($course_info->lessons as $lesson)
                                <li>
                                    <a class="{{$lesson_info->id==$lesson->id?'active':''}}"
                                       href="{{route('forum.LessonForum',$lesson->id)}}">{{$lesson->name}} </a>
                                </li>
                            @endforeach
                    </ul>
                    @endif
                </div>
                <div class="col-xl-7">
                    <div class="fourm_header d-flex align-items-center justify-content-between">
                        <div class="fourm_header_left">
                            <select class="fourm_select" id="course_list">
                                <option value="0" data-display="Select Courses">Select Courses</option>
                                @foreach ($courses as $course)
                                    <option
                                            {{isset($course_info->id) ? $course_info->id==$course->id? 'selected':'':''}} value="{{$course->id}}">{{$course->title}}
                                        [{{$course->forums->count()}}]
                                    </option>
                                @endforeach
                            </select>
                        </div>
                        <div class="fourm_header_right">
                            <div class="nav fouram_tabs" id="nav-tab" role="tablist">
                                <a class="nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                                   role="tab" aria-controls="nav-home" aria-selected="true">Latest</a>
                                <a class="nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                                   role="tab" aria-controls="nav-profile" aria-selected="false">Unread</a>
                                {{-- <a class="nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Rising</a> --}}
                                <a class="nav-link" id="nav-contact-tab2" data-toggle="tab" href="#nav-contact"
                                   role="tab" aria-controls="nav-contact2" aria-selected="false">Most Viewed</a>
                            </div>
                        </div>
                    </div>
                    <div class="fourm_header d-flex align-items-center justify-content-between">
                        @csrf
                        <div class="input-group theme_search_field style2">
                            <div class="input-group-prepend">
                                <button class="btn" type="submit" id="button-addon1"><i class="ti-search"></i></button>
                            </div>
                            <input type="text" autocomplete="off" id="forum_search_input" class="form-control"
                                   placeholder="Search…">
                        </div>
                    </div>
                    <input type="hidden" id="loader_icon"
                           value="{{asset('Modules/Forum/Resources/assets/img/LoaderIcon.gif')}}">
                    <div class="forum_suggestion">
                        <ul class="list" id="forum_suggestion_list" style="display: none">

                        </ul>

                    </div>
                    <div class="fourm_body">
                        <div class="tab-content" id="nav-tabContent">
                            <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                 aria-labelledby="nav-home-tab">
                                <!-- content  -->
                                <div class="table-responsive">
                                    <table class="table fourm_table mb-0">
                                        <thead>
                                        <tr>
                                            <th class="pl-0">Latest post
                                                @if(isset($course_info->id) && $course_info->IsLoginUserEnrolled)
                                                    <a href="{{route('forum.CreateLessonForum',[$course_info->id,$lesson_info->id])}}"><span
                                                                class="post_pin">New Post</span></a>
                                                @endif
                                            </th>
                                            <th class="px-3 text-center">Replies</th>
                                            <th class="px-3 text-center">Views</th>
                                            <th class="text-right">Activity</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @forelse ($forums as $forum)
                                            <tr>
                                                <td>
                                                    <a href="{{route('forum.ViewForum',$forum->id)}}">
                                                        <div class="topic_name">
                                                            <h3>
                                                                {{@$forum->title}}
                                                                @if ($forum->privacy==1)
                                                                    <span class="topic_info">Private</span>
                                                                @endif
                                                            </h3>
                                                            {{-- <p>{!! @$forum->description !!}</p> --}}
                                                            <p>{!! Illuminate\Support\Str::limit(@$forum->description, $limit = 200, $end = '...') !!}</p>
                                                            <span
                                                                    class="category_tag style_2">{{@$forum->user->name}}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td class="px-3 text-center">{{$forum->replies->count()}}</td>
                                                <td class="px-3 text-center">{{$forum->views->count()}}</td>
                                                <td class="text-right">
                                                    <div
                                                            class="table_replay d-flex align-items-center position-relative justify-content-end">
                                                        @if ($forum->all_replies->count() > 0)
                                                            <span
                                                                    class="no-wrap">{{ \Carbon\Carbon::parse($forum->all_replies[0]->updated_at)->diffForhumans() }}</span>
                                                        @else
                                                            <span class="no-wrap">{{ \Carbon\Carbon::parse($forum->updated_at)->diffForhumans() }}</span>
                                                        @endif
                                                    </div>

                                                    {{--                                                    <div class="table_replay d-flex align-items-center position-relative--}}
                                                    {{--                                                    justify-content-end">--}}


                                                    {{--                                                        <ul class="users_list position_user">--}}
                                                    {{--                                                            @php--}}
                                                    {{--                                                                $latest_reply_users=[];--}}
                                                    {{--                                                            @endphp--}}
                                                    {{--                                                            @foreach ($forum->replies as $reply)--}}
                                                    {{--                                                                @php--}}
                                                    {{--                                                                    if (!in_array($reply->user->id,$latest_reply_users)){--}}
                                                    {{--                                                                         $latest_reply_users[]=$reply->user->id;--}}
                                                    {{--                                                                    }else{--}}
                                                    {{--                                                                        continue;--}}
                                                    {{--                                                                    }--}}

                                                    {{--                                                                @endphp--}}
                                                    {{--                                                                <li>--}}
                                                    {{--                                                                    <div class="single_user">--}}
                                                    {{--                                                                        <div class="thumb">--}}
                                                    {{--                                                                            <div--}}
                                                    {{--                                                                                    class="profile_info profile_img collaps_icon d-flex align-items-center">--}}
                                                    {{--                                                                                <div class="studentProfileThumb"--}}
                                                    {{--                                                                                     style="background-image: url('{{getProfileImage($reply->user->image,$reply->user->name)}}');margin: 0"></div>--}}
                                                    {{--                                                                            </div>--}}
                                                    {{--                                                                        </div>--}}
                                                    {{--                                                                    </div>--}}
                                                    {{--                                                                    <!-- user_hover_card ::start -->--}}
                                                    {{--                                                                    <div class="user_hover_card">--}}
                                                    {{--                                                                        <div class="user_card_top">--}}
                                                    {{--                                                                            <span>--}}
                                                    {{--                                                                                <div class="thumb">--}}
                                                    {{--                                                                                    <div--}}
                                                    {{--                                                                                            class="profile_info profile_img collaps_icon d-flex align-items-center">--}}
                                                    {{--                                                                                        <div class="studentProfileThumb"--}}
                                                    {{--                                                                                             style="background-image: url('{{getProfileImage($reply->user->image,$reply->user->name)}}');margin: 0"></div>--}}
                                                    {{--                                                                                    </div>--}}
                                                    {{--                                                                                </div>--}}
                                                    {{--                                                                            </span>--}}
                                                    {{--                                                                            <h3>{{$reply->user->name}}</h3>--}}
                                                    {{--                                                                            <p>{{ \Carbon\Carbon::parse($reply->user->created_at)->diffForhumans() }}--}}
                                                    {{--                                                                                .--}}
                                                    {{--                                                                                Joined {{showDate($reply->user->created_at)}}</p>--}}
                                                    {{--                                                                        </div>--}}
                                                    {{--                                                                        <div class="user_points">--}}
                                                    {{--                                                                            <span>Point’s</span>--}}
                                                    {{--                                                                            <h3>{{$reply->user->forumReply->sum('points')}}</h3>--}}
                                                    {{--                                                                        </div>--}}
                                                    {{--                                                                        <div class="user_card_info">--}}
                                                    {{--                                                                            <p>Post’s--}}
                                                    {{--                                                                                <span> - {{$reply->user->forums->count()}}</span>--}}
                                                    {{--                                                                            </p>--}}
                                                    {{--                                                                            <p>Reply--}}
                                                    {{--                                                                                <span> - {{$reply->user->forumReply->count()}}</span>--}}
                                                    {{--                                                                            </p>--}}
                                                    {{--                                                                        </div>--}}
                                                    {{--                                                                    </div>--}}
                                                    {{--                                                                    <!-- user_hover_card ::end -->--}}
                                                    {{--                                                                </li>--}}
                                                    {{--                                                            @endforeach--}}

                                                    {{--                                                            --}}{{--                                                            @if ($forum->replies->count() > 3)--}}
                                                    {{--                                                            --}}{{--                                                                <li>--}}
                                                    {{--                                                            --}}{{--                                                                    <span class="ti-more-alt dot_icon"></span>--}}
                                                    {{--                                                            --}}{{--                                                                </li>--}}
                                                    {{--                                                            --}}{{--                                                            @endif--}}
                                                    {{--                                                        </ul>--}}
                                                    {{--                                                    </div>--}}
                                                    {{--                                                    --}}
                                                </td>
                                            </tr>

                                        @empty
                                            <tr>
                                                <td colspan="4" class="text-center">
                                                    Forum Not Found
                                                </td>
                                            </tr>
                                        @endforelse
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                        class="fourm_footer d-flex align-items-center justify-content-between gap_15 flex-wrap">
                                    {{ $forums->links() }}

                                </div>
                                <!-- content  -->
                            </div>
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                                 aria-labelledby="nav-profile-tab">
                                <div class="table-responsive">
                                    <table class="table fourm_table mb-0">
                                        <thead>
                                        <tr>
                                            <th class="pl-0">Unread post
                                                @if(isset($course_info->id) && $course_info->IsLoginUserEnrolled)
                                                    <a href="{{route('forum.CreateLessonForum',[$course_info->id,$lesson_info->id])}}"><span
                                                                class="post_pin">New Post</span></a>
                                                @endif
                                            </th>
                                            <th class="px-3 text-center">Replies</th>
                                            <th class="px-3 text-center">Views</th>
                                            <th class="text-right">Activity</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @forelse ($unread_forums as $forum)
                                            <tr>
                                                <td>
                                                    <a href="{{route('forum.ViewForum',$forum->id)}}">
                                                        <div class="topic_name">
                                                            <h3>
                                                                {{@$forum->title}}
                                                                @if ($forum->privacy==1)
                                                                    <span class="topic_info">Private</span>
                                                                @endif
                                                            </h3>
                                                            {{-- <p>{!! @$forum->description !!}</p> --}}
                                                            <p>{!! Illuminate\Support\Str::limit(@$forum->description, $limit = 200, $end = '...') !!}</p>
                                                            <span
                                                                    class="category_tag style_2">{{@$forum->user->name}}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td class="px-3 text-center">{{$forum->replies->count()}}</td>
                                                <td class="px-3 text-center">{{$forum->views->count()}}</td>
                                                <td class="text-right">
                                                    <div
                                                            class="table_replay d-flex align-items-center position-relative justify-content-end">
                                                        @if ($forum->all_replies->count() > 0)
                                                            <span
                                                                    class="no-wrap">{{ \Carbon\Carbon::parse($forum->all_replies[0]->updated_at)->diffForhumans() }}</span>
                                                        @else
                                                            <span class="no-wrap">{{ \Carbon\Carbon::parse($forum->updated_at)->diffForhumans() }}</span>
                                                        @endif
                                                        {{--                                                        --}}
                                                        {{--                                                        <ul class="users_list position_user">--}}
                                                        {{--                                                            @php--}}
                                                        {{--                                                                $latest_reply_users=[];--}}
                                                        {{--                                                            @endphp--}}
                                                        {{--                                                            @foreach ($forum->replies as $reply)--}}
                                                        {{--                                                                @php--}}
                                                        {{--                                                                    if (!in_array($reply->user->id,$latest_reply_users)){--}}
                                                        {{--                                                                         $latest_reply_users[]=$reply->user->id;--}}
                                                        {{--                                                                    }else{--}}
                                                        {{--                                                                        continue;--}}
                                                        {{--                                                                    }--}}

                                                        {{--                                                                @endphp--}}
                                                        {{--                                                                <li>--}}
                                                        {{--                                                                    <div class="single_user">--}}
                                                        {{--                                                                        <div class="thumb">--}}
                                                        {{--                                                                            <div--}}
                                                        {{--                                                                                    class="profile_info profile_img collaps_icon d-flex align-items-center">--}}
                                                        {{--                                                                                <div class="studentProfileThumb"--}}
                                                        {{--                                                                                     style="background-image: url('{{getProfileImage($reply->user->image,$reply->user->name)}}');margin: 0"></div>--}}
                                                        {{--                                                                            </div>--}}
                                                        {{--                                                                        </div>--}}
                                                        {{--                                                                    </div>--}}
                                                        {{--                                                                    <!-- user_hover_card ::start -->--}}
                                                        {{--                                                                    <div class="user_hover_card">--}}
                                                        {{--                                                                        <div class="user_card_top">--}}
                                                        {{--                                                                            <span>--}}
                                                        {{--                                                                                <div class="thumb">--}}
                                                        {{--                                                                                    <div--}}
                                                        {{--                                                                                            class="profile_info profile_img collaps_icon d-flex align-items-center">--}}
                                                        {{--                                                                                        <div class="studentProfileThumb"--}}
                                                        {{--                                                                                             style="background-image: url('{{getProfileImage($reply->user->image,$reply->user->name)}}');margin: 0"></div>--}}
                                                        {{--                                                                                    </div>--}}
                                                        {{--                                                                                </div>--}}
                                                        {{--                                                                            </span>--}}
                                                        {{--                                                                            <h3>{{$reply->user->name}}</h3>--}}
                                                        {{--                                                                            <p>{{ \Carbon\Carbon::parse($reply->user->created_at)->diffForhumans() }}--}}
                                                        {{--                                                                                .--}}
                                                        {{--                                                                                Joined {{showDate($reply->user->created_at)}}</p>--}}
                                                        {{--                                                                        </div>--}}
                                                        {{--                                                                        <div class="user_points">--}}
                                                        {{--                                                                            <span>Point’s</span>--}}
                                                        {{--                                                                            <h3>{{$reply->user->forumReply->sum('points')}}</h3>--}}
                                                        {{--                                                                        </div>--}}
                                                        {{--                                                                        <div class="user_card_info">--}}
                                                        {{--                                                                            <p>Post’s--}}
                                                        {{--                                                                                <span> - {{$reply->user->forums->count()}}</span>--}}
                                                        {{--                                                                            </p>--}}
                                                        {{--                                                                            <p>Reply--}}
                                                        {{--                                                                                <span> - {{$reply->user->forumReply->count()}}</span>--}}
                                                        {{--                                                                            </p>--}}
                                                        {{--                                                                        </div>--}}
                                                        {{--                                                                    </div>--}}
                                                        {{--                                                                    <!-- user_hover_card ::end -->--}}
                                                        {{--                                                                </li>--}}
                                                        {{--                                                            @endforeach--}}

                                                        {{--                                                            @if ($forum->replies->count() > 3)--}}
                                                        {{--                                                                <li>--}}
                                                        {{--                                                                    <span class="ti-more-alt dot_icon"></span>--}}
                                                        {{--                                                                </li>--}}
                                                        {{--                                                            @endif--}}
                                                        {{--                                                        </ul>--}}
                                                        {{--                                                        --}}
                                                    </div>
                                                </td>
                                            </tr>

                                        @empty
                                            <tr>
                                                <td colspan="4" class="text-center">
                                                    Forum Not Found
                                                </td>
                                            </tr>
                                        @endforelse

                                        </tbody>
                                    </table>
                                </div>
                                <div
                                        class="fourm_footer d-flex align-items-center justify-content-between gap_15 flex-wrap">
                                    {{ $unread_forums->links() }}

                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-contact" role="tabpanel"
                                 aria-labelledby="nav-contact-tab">
                                <div class="table-responsive">
                                    <table class="table fourm_table mb-0">
                                        <thead>
                                        <tr>
                                            <th class="pl-0">Most Viewed post
                                                @if(isset($course_info->id) && $course_info->IsLoginUserEnrolled)
                                                    <a href="{{route('forum.CreateLessonForum',[$course_info->id,$lesson_info->id])}}"><span
                                                                class="post_pin">New Post</span></a>
                                                @endif
                                            </th>
                                            <th>Replies</th>
                                            <th>Views</th>
                                            <th>Activity</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        @forelse ($viewed_forums as $forum)

                                            <tr>
                                                <td>
                                                    <a href="{{route('forum.ViewForum',$forum->id)}}">
                                                        <div class="topic_name">
                                                            <h3>
                                                                {{@$forum->title}}
                                                                @if ($forum->privacy==1)
                                                                    <span class="topic_info">Private</span>
                                                                @endif
                                                            </h3>
                                                            {{-- <p>{!! @$forum->description !!}</p> --}}
                                                            <p>{!! Illuminate\Support\Str::limit(@$forum->description, $limit = 200, $end = '...') !!}</p>
                                                            <span
                                                                    class="category_tag style_2">{{@$forum->user->name}}</span>
                                                        </div>
                                                    </a>
                                                </td>
                                                <td>{{$forum->replies->count()}}</td>
                                                <td>{{$forum->views->count()}}</td>
                                                <td class="position-relative text-nowrap">
                                                    <div
                                                            class="table_replay d-flex align-items-center position-relative justify-content-end">
                                                        @if ($forum->all_replies->count() > 0)
                                                            <span
                                                                    class="no-wrap">{{ \Carbon\Carbon::parse($forum->all_replies[0]->updated_at)->diffForhumans() }}</span>
                                                        @else
                                                            <span class="no-wrap">{{ \Carbon\Carbon::parse($forum->updated_at)->diffForhumans() }}</span>
                                                    @endif
                                                    {{--                                                    <ul class="users_list position_user">--}}
                                                    {{--                                                        @php--}}
                                                    {{--                                                            $latest_reply_users=[];--}}
                                                    {{--                                                        @endphp--}}
                                                    {{--                                                        @foreach ($forum->replies as $reply)--}}
                                                    {{--                                                            @php--}}
                                                    {{--                                                                if (!in_array($reply->user->id,$latest_reply_users)){--}}
                                                    {{--                                                                     $latest_reply_users[]=$reply->user->id;--}}
                                                    {{--                                                                }else{--}}
                                                    {{--                                                                    continue;--}}
                                                    {{--                                                                }--}}

                                                    {{--                                                            @endphp--}}
                                                    {{--                                                            <li>--}}
                                                    {{--                                                                <div class="single_user">--}}
                                                    {{--                                                                    <div class="thumb">--}}
                                                    {{--                                                                        <div--}}
                                                    {{--                                                                                class="profile_info profile_img collaps_icon d-flex align-items-center">--}}
                                                    {{--                                                                            <div class="studentProfileThumb"--}}
                                                    {{--                                                                                 style="background-image: url('{{getProfileImage($reply->user->image,$reply->user->name)}}');margin: 0"></div>--}}
                                                    {{--                                                                        </div>--}}
                                                    {{--                                                                    </div>--}}
                                                    {{--                                                                </div>--}}
                                                    {{--                                                                <!-- user_hover_card ::start -->--}}
                                                    {{--                                                                <div class="user_hover_card">--}}
                                                    {{--                                                                    <div class="user_card_top">--}}
                                                    {{--                                                                        <span>--}}
                                                    {{--                                                                            <div class="thumb">--}}
                                                    {{--                                                                                <div--}}
                                                    {{--                                                                                        class="profile_info profile_img collaps_icon d-flex align-items-center">--}}
                                                    {{--                                                                                    <div class="studentProfileThumb"--}}
                                                    {{--                                                                                         style="background-image: url('{{getProfileImage($reply->user->image,$reply->user->name)}}');margin: 0"></div>--}}
                                                    {{--                                                                                </div>--}}
                                                    {{--                                                                            </div>--}}
                                                    {{--                                                                        </span>--}}
                                                    {{--                                                                        <h3>{{$reply->user->name}}</h3>--}}
                                                    {{--                                                                        <p>{{ \Carbon\Carbon::parse($reply->user->created_at)->diffForhumans() }}--}}
                                                    {{--                                                                            .--}}
                                                    {{--                                                                            Joined {{showDate($reply->user->created_at)}}</p>--}}
                                                    {{--                                                                    </div>--}}
                                                    {{--                                                                    <div class="user_points">--}}
                                                    {{--                                                                        <span>Point’s</span>--}}
                                                    {{--                                                                        <h3>{{$reply->user->forumReply->sum('points')}}</h3>--}}
                                                    {{--                                                                    </div>--}}
                                                    {{--                                                                    <div class="user_card_info">--}}
                                                    {{--                                                                        <p>Post’s--}}
                                                    {{--                                                                            <span> - {{$reply->user->forums->count()}}</span>--}}
                                                    {{--                                                                        </p>--}}
                                                    {{--                                                                        <p>Reply--}}
                                                    {{--                                                                            <span> - {{$reply->user->forumReply->count()}}</span>--}}
                                                    {{--                                                                        </p>--}}
                                                    {{--                                                                    </div>--}}
                                                    {{--                                                                </div>--}}
                                                    {{--                                                                <!-- user_hover_card ::end -->--}}
                                                    {{--                                                            </li>--}}
                                                    {{--                                                        @endforeach--}}

                                                    {{--                                                        @if ($forum->replies->count() > 3)--}}
                                                    {{--                                                            <li>--}}
                                                    {{--                                                                <span class="ti-more-alt dot_icon"></span>--}}
                                                    {{--                                                            </li>--}}
                                                    {{--                                                        @endif--}}
                                                    {{--                                                    </ul>--}}
                                                </td>
                                            </tr>

                                        @empty
                                            <tr>
                                                <td colspan="4" class="text-center">
                                                    Forum Not Found
                                                </td>
                                            </tr>
                                        @endforelse

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-contact2" role="tabpanel"
                                 aria-labelledby="nav-contact-tab2">...
                            </div>
                        </div>

                    </div>

                </div>
                <div class="col-xl-3">
                    <div class="fourm_cat_boxes mb_20 mt_114">
                        @php
                            $category_list= Modules\CourseSetting\Entities\Category::with('courses')->whereHas('courses.forums')->where('status',1)->get();
                        @endphp
                        <h3 class="cat_title f_s_20 f_w_700">Categories</h3>
                        <ul class="Check_sidebar" id="category_list">
                            @foreach ($category_list as $category)

                                <li>
                                    <label class="primary_checkbox d-flex">
                                        <input type="checkbox" name="category[]"
                                               {{isset($categories)? in_array($category->id,$categories)? 'checked':'':''}} class="category_select"
                                               value="{{$category->id}}">
                                        <span class="checkmark mr_10"></span>
                                        <span class="label_name font_16 f_w_400">{{$category->name}}</span>
                                    </label>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="fourm_cat_boxes mb_20 mt-0">
                        <h3 class="cat_title f_s_20 f_w_700 mb-2">Recent Discussion</h3>
                        <div class="discussion_lists">
                            @foreach ($recent_forums as $key => $forum)
                                @php
                                    if($key >2){
                                        continue;
                                    }
                                @endphp
                                <div class="single_discussion">
                                    <h3><a href="{{route('forum.ViewForum',$forum->id)}}">{{@$forum->title}}</a></h3>
                                    <p>{{showDate($forum->created_at)}}
                                        , {{date("H:i:s A",strtotime($forum->created_at))}}</p>
                                </div>
                            @endforeach

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
