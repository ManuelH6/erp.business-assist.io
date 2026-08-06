<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\Expense;

class CreateExpense
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Expense $expense
    ) {}
}
