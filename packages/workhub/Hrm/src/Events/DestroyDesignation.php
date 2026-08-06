<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Designation;

class DestroyDesignation
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Designation $designation
    )
    {
        //
    }
}