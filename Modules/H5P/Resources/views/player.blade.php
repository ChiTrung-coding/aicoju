<style>
    #h5p-container {
        margin-top: 10%;
        width: 100% !important;
        height: 100% !important;
    }

    .course_fullview_wrapper .course__play_warp {
        top: 88px;
    }

    .h5p-iframe-wrapper iframe {
        height: calc(100vh - 88px) !important;
    }

    .course_fullview_wrapper {
        min-height: calc(100vh - 176px);
    }

    #h5p-container {
        margin: 0;
    }

    .h5p-baq {
        height: 100vh !important;
    }
</style>
@php
    $jsonPath = $lesson->h5pContent->path;
    $timestamp = strtotime(now());
@endphp
<div id='h5p-container'></div>

<input type="hidden" id="jsonPath" value="{{ asset($jsonPath) }}">
<input type="hidden" id="frameJs"
       value="{{ url('/') }}/Modules/H5P/Resources/assets/h5p-standalone/frame.bundle.js">
<input type="hidden" id="frameCss"
       value="{{ url('/') }}/Modules/H5P/Resources/assets/h5p-standalone/frame.bundle.js">
<input type="hidden" id="base_url" value="{{ env('APP_URL') }}">
<input type="hidden" id="course_id" value="{{ $course->id }}">
<input type="hidden" id="lesson_id" value="{{ $lesson->id }}">
<input type="hidden" id="timestamp" value="{{ $timestamp }}">



@push('js')
    <script type="text/javascript"
            src="{{ url('/') }}/Modules/H5P/Resources/assets/h5p-standalone/main.bundle.js{{assetVersion()}}">
    </script>
    <script>
        const el = document.getElementById('h5p-container');
        let base_url = document.getElementById('base_url').value;
        const options = {
            h5pJsonPath: document.getElementById('jsonPath').value,
            frameJs: document.getElementById('frameJs').value,
            frameCss: document.getElementById('frameCss').value,
        }
        new H5PStandalone.H5P(el, options);
        const timestamp = document.getElementById('timestamp').value;

        H5P.externalDispatcher.on("xAPI", (event) => {
            // console.log(event);
            let course_id = document.getElementById('course_id').value;
            let lesson_id = document.getElementById('lesson_id').value;
            let verb = event.data.statement.verb.display["en-US"];
            let object = event.data.statement.object.definition.name["en-US"];
            //generate timestamp to string


            let duration = "";
            let score = 0.0;
            let max_score = 0.0;
            let min_score = 0.0;
            let scaled = 0.0;
            if (event.data.statement.result && event.data.statement.result.completion == true) {
                duration = event.data.statement.result.duration;
                score = event.data.statement.result.score.raw;
                max_score = event.data.statement.result.score.max;
                min_score = event.data.statement.result.score.min;
                scaled = event.data.statement.result.score.scaled;
            }
            $.ajax({
                url: base_url + '/h5p/xapi',
                type: 'POST',
                data: {
                    course_id: course_id,
                    lesson_id: lesson_id,
                    verb: verb,
                    timestamp: timestamp,

                    duration: duration,
                    score: score,
                    max_score: max_score,
                    min_score: min_score,
                    scaled: scaled

                },
                success: function (data) {
                    if (data.lesson_complete) {
                        const checkmark = document.querySelectorAll('.checkmark');

                        const last_index = checkmark.length - 1;

                        checkmark.forEach(function (element, i) {
                            var a_tag = element.closest('a');
                            if (a_tag.classList.contains('active')) {
                                if (i != last_index) {
                                    if ($('#autoNext').is(':checked')) {
                                        if ($('#next_lesson_btn').length) {
                                            jQuery('#next_lesson_btn').click();
                                        } else {
                                            location.reload();
                                        }
                                    }
                                }
                            }
                        });

                    }
                }
            });


        });
    </script>
@endpush
