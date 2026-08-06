<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\TerminationType;

class DestroyTerminationType
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public TerminationType $terminationType
    )
    {
        //
    }
}