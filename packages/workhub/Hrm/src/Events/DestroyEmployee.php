<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Employee;

class DestroyEmployee
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Employee $employee
    )
    {
        //
    }
}