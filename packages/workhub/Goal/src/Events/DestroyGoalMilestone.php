<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Goal\Models\GoalMilestone;

class DestroyGoalMilestone
{
    use Dispatchable;

    public function __construct(
        public GoalMilestone $milestone
    ) {}
}