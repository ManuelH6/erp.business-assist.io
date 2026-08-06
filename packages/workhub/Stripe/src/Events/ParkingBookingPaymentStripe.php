<?php

namespace Workhub\Stripe\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\ParkingManagement\Models\ParkingBooking;

class ParkingBookingPaymentStripe
{
    use Dispatchable;

     public function __construct(
        public ParkingBooking $booking
    ) {}
}