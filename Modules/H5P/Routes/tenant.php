<?php

use Illuminate\Support\Facades\Route;


Route::prefix('h5p')->middleware(['auth'])->group(function () {
    Route::post('xapi', 'H5PController@storeXApi')->name('h5p.xapi');// Ajax
    Route::get('report', 'H5PReportController@studentH5p')->name('h5p.student-h5p')->middleware('RoutePermissionCheck:h5p.student-h5p');
    Route::get('/report-data', 'H5PReportController@data')->name('h5p.report.data')->middleware('RoutePermissionCheck:h5p.student-h5p');
    Route::get('/report-details/{enrolled_id}', 'H5PReportController@details')->name('h5p.report.details')->middleware('RoutePermissionCheck:h5p.student-h5p');
    Route::get('/report-lesson-details/{user_id}/{lesson_id}', 'H5PReportController@lessonDetails')->name('h5p.report.lesson-details')->middleware('RoutePermissionCheck:h5p.student-h5p');
});

