<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateH5pReportDetailsTable extends Migration
{
    public function up()
    {
        Schema::create('h5p_report_details', function (Blueprint $table) {
            $table->id();
            $table->integer('report_id')->nullable();
            $table->string('verb')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('h5p_report_details');
    }
}
