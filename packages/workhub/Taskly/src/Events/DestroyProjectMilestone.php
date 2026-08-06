<?php

namespace Workhub\Taskly\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Taskly\Models\ProjectMilestone;

class DestroyProjectMilestone
{
    use Dispatchable;

    public function __construct(
        public ProjectMilestone $milestone
    ) {}
}
