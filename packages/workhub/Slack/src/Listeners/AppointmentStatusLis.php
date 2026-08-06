<?php

namespace Workhub\Slack\Listeners;

use Workhub\Appointment\Events\AppointmentStatus;
use Workhub\Slack\Services\SendMsg;

class AppointmentStatusLis
{
    public function __construct()
    {
        //
    }

    public function handle(AppointmentStatus $event)
    {
        $schedule = $event->schedule;

        if (company_setting('Slack Appointment Status') == 'on') {
            $uArr = [
                'appointment_name'=>$schedule->appointment->name,
                'status'=>$schedule->status,
            ];

            SendMsg::SendMsgs($uArr, 'Appointment Status', $schedule->created_by);
        }
    }
}
