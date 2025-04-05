<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Modules\RolePermission\Entities\Permission;

class AddPermissions extends Migration
{
    public function up()
    {
        $routes = [
            ['name' => 'H5P', 'route' => 'h5p', 'type' => 1, 'parent_route' => null, 'module' => 'H5P'],
            ['name' => 'H5P Report', 'route' => 'h5p.student-h5p', 'type' => 2, 'parent_route' => 'h5p', 'module' => 'H5P'],
            ['name' => 'Lesson List', 'route' => 'h5p.report.details', 'type' => 3, 'parent_route' => 'h5p.student-h5p', 'module' => 'H5P'],
        ];

        if (function_exists('permissionUpdateOrCreate')) {
            permissionUpdateOrCreate($routes);
        }
    }

    public function down()
    {
        //
    }
}
