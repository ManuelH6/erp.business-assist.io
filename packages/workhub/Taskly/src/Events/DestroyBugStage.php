<?php

namespace Workhub\Taskly\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Taskly\Models\BugStage;

class DestroyBugStage
{
    use Dispatchable;

    public function __construct(
        public BugStage $bugStage,
    ) {}
}