<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\ExpenseCategories;

class DestroyExpenseCategories
{
    use Dispatchable;

    public function __construct(
        public ExpenseCategories $expenseCategories
    ) {}
}
