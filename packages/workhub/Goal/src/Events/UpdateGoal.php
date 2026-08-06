<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Goal\Models\Goal;

class UpdateGoal
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Goal $goal
    ) {}
}