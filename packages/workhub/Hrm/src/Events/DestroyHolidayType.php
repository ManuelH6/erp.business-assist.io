<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\HolidayType;

class DestroyHolidayType
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public HolidayType $holidayType
    )
    {
        //
    }
}