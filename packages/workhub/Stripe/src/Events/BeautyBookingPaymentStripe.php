<?php

namespace Workhub\Stripe\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\BeautySpaManagement\Models\BeautyBooking;

class BeautyBookingPaymentStripe
{
    use Dispatchable;

    public function __construct(
        public BeautyBooking $booking
    ) {}
}
