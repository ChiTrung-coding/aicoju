<?php

namespace Modules\H5P\Entities;

use Illuminate\Database\Eloquent\Model;
use Modules\H5P\Entities\H5pReportDetail;

class H5pReport extends Model
{
    protected $fillable = [];

    public function details()
    {
        return $this->hasMany(H5pReportDetail::class, 'report_id');
    }
}
