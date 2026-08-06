<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Goal\Models\GoalMilestone;

class UpdateGoalMilestone
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public GoalMilestone $milestone
    ) {}
}