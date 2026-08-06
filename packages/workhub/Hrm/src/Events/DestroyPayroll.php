<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Payroll;

class DestroyPayroll
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Payroll $payroll
    )
    {
        //
    }
}