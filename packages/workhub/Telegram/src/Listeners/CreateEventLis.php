<?php

namespace Workhub\Telegram\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Hrm\Events\CreateEvent;
use Workhub\Hrm\Models\Branch;
use Workhub\Hrm\Models\Department;
use Workhub\Telegram\Services\SendMsg;

class CreateEventLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateEvent $event)
    {
        if(company_setting('Telegram New Event')  == 'on')
        {
            $request      = $event->request;
            $event        = $event->event;
            $departments = Department::whereIn('id', $request->departments)->pluck('department_name')->toArray();

            $departments_name = implode(',', $departments);

            $uArr = [
                'event_name' => $request->title,
                'branch_name' => $departments_name,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
            ];
            SendMsg::SendMsgs($uArr , 'New Event');
        }
    }
}
