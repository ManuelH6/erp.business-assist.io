<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\Hrm\Models\Payroll;

class CreatePayroll
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public Payroll $payroll
    ) {}
}