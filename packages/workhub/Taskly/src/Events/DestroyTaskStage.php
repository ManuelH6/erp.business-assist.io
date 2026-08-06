<?php

namespace Workhub\Taskly\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Taskly\Models\TaskStage;

class DestroyTaskStage
{
    use Dispatchable;

    public function __construct(
        public TaskStage $taskStage,
    ) {}
}