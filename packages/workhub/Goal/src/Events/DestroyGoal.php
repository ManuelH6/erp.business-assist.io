<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Goal\Models\Goal;

class DestroyGoal
{
    use Dispatchable;

    public function __construct(
        public Goal $goal
    ) {}
}