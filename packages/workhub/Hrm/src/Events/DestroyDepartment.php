<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Department;

class DestroyDepartment
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Department $department
    )
    {
        //
    }
}