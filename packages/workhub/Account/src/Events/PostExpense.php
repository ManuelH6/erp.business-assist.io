<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\Expense;

class PostExpense
{
    use Dispatchable;

    public function __construct(
        public Expense $expense
    ) {}
}
