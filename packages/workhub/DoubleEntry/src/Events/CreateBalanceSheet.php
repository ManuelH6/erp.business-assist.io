<?php

namespace Workhub\DoubleEntry\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\DoubleEntry\Models\BalanceSheet;

class CreateBalanceSheet
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public BalanceSheet $balanceSheet
    ) {}
}
