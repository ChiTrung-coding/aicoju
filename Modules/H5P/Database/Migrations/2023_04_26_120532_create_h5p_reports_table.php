<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateH5pReportsTable extends Migration
{
    public function up()
    {
        Schema::create('h5p_reports', function (Blueprint $table) {
            $table->id();
            $table->integer('course_id')->nullable();
            $table->integer('user_id')->nullable();
            $table->integer('lesson_id')->nullable();
            $table->double('score')->nullable();
            $table->double('max_score')->nullable();
            $table->double('min_score')->nullable();
            $table->double('scaled')->nullable();
            $table->string('duration')->nullable();
            $table->integer('attempt')->nullable();
            $table->integer('timestamp')->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('h5p_reports');
    }
}
