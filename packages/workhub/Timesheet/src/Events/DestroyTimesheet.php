<?php

namespace Workhub\Timesheet\Events;

use Workhub\Timesheet\Models\Timesheet;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyTimesheet
{
    use Dispatchable;

    public function __construct(
        public Timesheet $timesheet
    ) {}
}