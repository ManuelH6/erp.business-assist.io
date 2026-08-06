<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Account\Models\ChartOfAccount;

class DestroyChartOfAccount
{
    use Dispatchable;

    public function __construct(
        public ChartOfAccount $chartofaccount
    ) {}
}
