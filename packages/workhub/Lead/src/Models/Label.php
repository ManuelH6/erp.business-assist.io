<?php

namespace Workhub\Lead\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Workhub\Lead\Models\Pipeline;

class Label extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color',
        'pipeline_id',
        'creator_id',
        'created_by',
    ];

    public function pipeline()
    {
        return $this->belongsTo(Pipeline::class);
    }
}