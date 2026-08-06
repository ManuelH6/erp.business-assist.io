<?php

namespace Workhub\BudgetPlanner\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\BudgetPlanner\Models\BudgetAllocation;

class DestroyBudgetAllocation
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public BudgetAllocation $budget_allocation
    ) {}
}
