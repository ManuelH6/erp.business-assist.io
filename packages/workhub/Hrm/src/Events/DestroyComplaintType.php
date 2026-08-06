<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\ComplaintType;

class DestroyComplaintType
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public ComplaintType $complaintType
    )
    {
        //
    }
}