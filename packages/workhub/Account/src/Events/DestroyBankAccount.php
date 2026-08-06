<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Account\Models\BankAccount;

class DestroyBankAccount
{
    use Dispatchable;

    public function __construct(
        public BankAccount $bankAccount
    ) {}
}