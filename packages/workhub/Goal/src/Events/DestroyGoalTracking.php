<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Goal\Models\GoalTracking;

class DestroyGoalTracking
{
    use Dispatchable;

    public function __construct(
        public GoalTracking $tracking
    ) {}
}
