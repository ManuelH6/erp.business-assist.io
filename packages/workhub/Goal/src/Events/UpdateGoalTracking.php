<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\Goal\Models\GoalTracking;

class UpdateGoalTracking
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public GoalTracking $tracking
    ) {}
}
