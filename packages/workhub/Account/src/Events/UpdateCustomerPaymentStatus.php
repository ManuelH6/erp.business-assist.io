<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\CustomerPayment;

class UpdateCustomerPaymentStatus
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public CustomerPayment $customerPayment
    ) {}
}
