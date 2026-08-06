<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Warning;

class DestroyWarning
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Warning $warning
    )
    {
        //
    }
}