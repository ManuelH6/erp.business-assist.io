<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\Hrm\Models\LeaveType;

class UpdateLeaveType
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public LeaveType $leavetype
    ) {

    }
}