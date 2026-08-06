<?php

namespace Workhub\Taskly\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Taskly\Models\ProjectMilestone;

class UpdateProjectMilestone
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public ProjectMilestone $milestone
    ) {}
}
