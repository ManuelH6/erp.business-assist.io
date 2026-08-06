<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\Goal\Models\GoalContribution;

class UpdateGoalContribution
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public GoalContribution $goalContribution
    ) {}
}
