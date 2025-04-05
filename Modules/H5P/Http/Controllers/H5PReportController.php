<?php

namespace Modules\H5P\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\H5P\Entities\H5pReport;
use Yajra\DataTables\Facades\DataTables;
use Modules\CourseSetting\Entities\Lesson;
use Illuminate\Contracts\Support\Renderable;
use Modules\CourseSetting\Entities\CourseEnrolled;

class H5PReportController extends Controller
{

    public function studentH5p()
    {
        return view('h5p::student_h5p');
    }

    public function data()
    {


        $query = CourseEnrolled::select(['course_enrolleds.*'])->with('course', 'user', 'course.lessons');


        $query->whereHas('course', function ($q) {
            return $q->where('type', 1);
        });

        $query->whereHas('course.lessons', function ($q) {
            return $q->where('host', 'H5P');
        });

        return DataTables::of($query)
            ->addIndexColumn()
            ->editColumn('user.name', function ($query) {
                return $query->user->name;
            })
            ->editColumn('course.title', function ($query) {
                return $query->course->title;
            })
            ->addColumn('lesson', function ($query) {
                return count($query->course->lessons->where('host', 'H5P'));
            })
            ->addColumn('action', function ($query) {


                return ' <div class="dropdown CRM_dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button"
                                                            id="dropdownMenu2" data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false">
                                                        ' . trans('common.Action') . '
                                                    </button>
                                                    <div class="dropdown-menu dropdown-menu-right"
                                                         aria-labelledby="dropdownMenu2">
                                                         <a class="dropdown-item" href="' . route('h5p.report.details', $query->id) . '" data-id="' . $query->id . '" type="button">' . trans('courses.Lesson List') . '</a>
                                                    </div>
                                                </div>';


            })->rawColumns(['action'])
            ->make(true);
    }

    public function details($id)
    {
        $enroll = CourseEnrolled::with('course.lessons')->find($id);
        $user_id = $enroll->user_id;
        $course = $enroll->course;
        $lessons = $course->lessons->where('host', 'H5P');
        return view('h5p::details', compact('lessons', 'user_id', 'course'));
    }

    public function lessonDetails($user_id, $lesson_id)
    {
        $user = User::FindOrFail($user_id);
        $lesson = Lesson::FindOrFail($lesson_id);
        $report = H5pReport::where('user_id', $user_id)->where('lesson_id', $lesson_id)->with('details')->first();
        return view('h5p::lessons', compact('user', 'report', 'lesson'));
    }


}
