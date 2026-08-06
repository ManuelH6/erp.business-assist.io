<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\Hrm\Models\Shift;

class UpdateShift
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public Shift $shift
    ) {

    }
}