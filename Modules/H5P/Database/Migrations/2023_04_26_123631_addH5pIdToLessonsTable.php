<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddH5pIdToLessonsTable extends Migration
{
    public function up()
    {
        Schema::table('lessons', function (Blueprint $table) {
            $table->integer('h5p_id')->nullable()->comment('H5P ID');
        });
    }

    public function down()
    {
        //
    }
}
