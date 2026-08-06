<?php

namespace Workhub\DoubleEntry\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\DoubleEntry\Models\BalanceSheetNote;

class DestroyBalanceSheetNote
{
    use Dispatchable;

    public function __construct(
        public BalanceSheetNote $balanceSheetNote
    ) {}
}
