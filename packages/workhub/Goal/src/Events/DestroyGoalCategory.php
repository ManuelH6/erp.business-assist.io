<?php

namespace Workhub\Goal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Goal\Models\GoalCategory;

class DestroyGoalCategory
{
    use Dispatchable;

    public function __construct(
        public GoalCategory $category
    ) {}
}
