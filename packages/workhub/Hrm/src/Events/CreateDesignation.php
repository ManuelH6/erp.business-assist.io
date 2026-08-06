<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\Hrm\Models\Designation;

class CreateDesignation
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public Designation $designation
    ) {}
}