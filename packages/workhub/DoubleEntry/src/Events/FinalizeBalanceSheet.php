<?php

namespace Workhub\DoubleEntry\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\DoubleEntry\Models\BalanceSheet;

class FinalizeBalanceSheet
{
    use Dispatchable;

    public function __construct(
        public BalanceSheet $balanceSheet
    ) {}
}
