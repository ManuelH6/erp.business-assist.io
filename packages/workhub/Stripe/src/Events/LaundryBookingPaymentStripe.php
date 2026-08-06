<?php

namespace Workhub\Stripe\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\LaundryManagement\Models\LaundryRequest;

class LaundryBookingPaymentStripe
{
    use Dispatchable;

    public function __construct(
        public LaundryRequest $booking
    ) {}
}
