<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Award;

class DestroyAward
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Award $award
    )
    {
        //
    }
}