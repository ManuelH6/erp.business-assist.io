<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Account\Models\Customer;

class DestroyCustomer
{
    use Dispatchable;

    public function __construct(
        public Customer $customer
    ) {}
}