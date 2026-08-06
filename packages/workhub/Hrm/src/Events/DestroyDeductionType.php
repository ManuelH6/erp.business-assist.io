<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\DeductionType;

class DestroyDeductionType
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public DeductionType $deductionType
    )
    {
        //
    }
}