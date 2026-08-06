<?php

namespace Workhub\Telegram\Listeners;

use App\Models\User;
use Workhub\CleaningManagement\Events\CreateCleaningBooking;
use Workhub\Telegram\Services\SendMsg;

class CreateCleaningBookingLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateCleaningBooking $event)
    {
        $booking = $event->cleaningBooking;
        $user    = User::find($booking->user_id);

        if (company_setting('Telegram New Cleaning Booking')  == 'on') {

            if(!empty($booking) && !empty($user))
            {
                $uArr = [
                    'user_name' => $booking->customer_name != null ? $booking->customer_name : $user->name ?? '',
                ];
                SendMsg::SendMsgs($uArr , 'New Cleaning Booking');
            }
        }
    }
}
