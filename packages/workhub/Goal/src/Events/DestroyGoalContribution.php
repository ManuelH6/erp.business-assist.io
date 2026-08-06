<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Goal\Models\GoalContribution;

class DestroyGoalContribution
{
    use Dispatchable;

    public function __construct(
        public GoalContribution $goalContribution
    ) {}
}
