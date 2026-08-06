<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\CustomerPayment;

class DestroyCustomerPayment
{
    use Dispatchable;

    public function __construct(
        public CustomerPayment $customerPayment
    ) {}
}
