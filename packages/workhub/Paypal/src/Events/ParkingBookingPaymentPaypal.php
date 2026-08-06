<?php

namespace Workhub\Paypal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\ParkingManagement\Models\ParkingBooking;

class ParkingBookingPaymentPaypal
{
    use Dispatchable;

    public function __construct(
        public ParkingBooking $booking
    ) {}
}