<?php

namespace Modules\H5P\Http\Controllers;

use Modules\H5P\Entities\H5pContent;
use Modules\H5P\Entities\H5pReport;
use Modules\H5P\Entities\H5pReportDetail;
use ZipArchive;
use App\Traits\Filepond;
use App\Traits\UploadTheme;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\File;
use App\Http\Controllers\Frontend\WebsiteController;

class H5PController extends Controller
{
    use UploadTheme, Filepond;


    public function getH5PUrl($path, $host = 'local', $request)
    {
        $uniqId = uniqid();
        try {
            $zip = new ZipArchive;
            $res = $zip->open($path);

            if ($res === true) {
                $zip->extractTo(storage_path('app/tempH5p/' . $uniqId));
                $zip->close();
            } else {
                abort(500, 'Error! Could not open File');
            }
            $src = storage_path('app/tempH5p/' . $uniqId);
            $folder = '/public/uploads/h5p/' . $uniqId . '/';
            $dst = base_path($folder);


            $this->recurse_copy($src, $dst);
            $this->deleteFile($host, $path);

            $content_jspn = file_get_contents($dst . 'content/content.json');
            $h5p_json = file_get_contents($dst . 'h5p.json');

            return $this->storeH5pData($content_jspn, $h5p_json, $folder);
        } catch (\Exception $e) {
            $this->deleteFile($host, $path);
            return false;
        }
    }

    function storeH5pData($content_jspn, $h5p_json, $folder)
    {
        try {
            $h5p_content = new H5pContent();
            $h5p_content->title = json_decode($h5p_json)->title;
            $h5p_content->content = $content_jspn;
            $h5p_content->h5p = $h5p_json;
            $h5p_content->user_id = auth()->user()->id;
            $h5p_content->path = $folder;
            $h5p_content->storage = 'local';
            $h5p_content->save();
            return $h5p_content;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function deleteFile($host, $path = null)
    {
        if (storage_path('app/tempH5p')) {
            $this->delete_directory(storage_path('app/tempH5p'));
        }
        if ($path) {
            File::delete($path);
        }
    }

    function initParticipation($request)
    {
        try {
            $h5p_report = H5pReport::where('user_id', auth()->user()->id)->where('course_id', $request->course_id)->where('lesson_id', $request->lesson_id)->first();
            if (!$h5p_report) {
                $h5p_report = new H5pReport();
                $h5p_report->user_id = auth()->user()->id;
                $h5p_report->course_id = $request->course_id;
                $h5p_report->lesson_id = $request->lesson_id;
                $h5p_report->attempt = 1;
                $h5p_report->save();
            }
            $check_answered = $h5p_report->details()->orderBy('id', 'desc')->first();
            if ($check_answered && $check_answered->verb == 'answered') {
                $h5p_report->attempt = $h5p_report->attempt + 1;
                $h5p_report->save();
            }
            if ($request->verb == 'answered') {
                $h5p_report->score = $request->score;
                $h5p_report->max_score = $request->max_score;
                $h5p_report->min_score = $request->min_score;
                $h5p_report->scaled = $request->scaled;
                $h5p_report->duration = $request->duration;
                $h5p_report->save();
            } else {
                $h5p_report->timestamp = $request->timestamp;
                $h5p_report->save();
            }
            return $h5p_report;
        } catch (\Throwable $th) {
            return false;
        }
    }

    public function storeXApi(Request $request)
    {
        try {
            $init = $this->initParticipation($request);
            if (!$init) {
                return response()->json(['message' => 'Error'], 500);
            }

            $h5p_xapi = new H5pReportDetail();
            $h5p_xapi->report_id = $init->id;
            $h5p_xapi->verb = $request->verb;
            $h5p_xapi->save();

            if ($init->scaled == 1) {
                $controller = new WebsiteController();
                $lesson_complete = $controller->lessonCompleteAjax($request);
                if ($lesson_complete) {
                    return response()->json([
                        'message' => 'Success',
                        'lesson_complete' => true
                    ], 200);
                }
            }

            return response()->json(['message' => 'Success'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Error'], 500);
        }
    }
}
