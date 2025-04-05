<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateH5pContentsTable extends Migration
{
    public function up()
    {
        Schema::create('h5p_contents', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable();
            $table->longText('h5p')->nullable();
            $table->longText('content')->nullable();
            $table->bigInteger('user_id')->nullable();
            $table->string('path')->nullable();
            $table->string('storage')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('h5p_contents');
    }
}
