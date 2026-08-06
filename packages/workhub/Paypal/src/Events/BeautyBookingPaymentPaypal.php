<?php

namespace Workhub\Paypal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\BeautySpaManagement\Models\BeautyBooking;

class BeautyBookingPaymentPaypal
{
    use Dispatchable;

    public function __construct(
        public BeautyBooking $booking
    ) {}
}
