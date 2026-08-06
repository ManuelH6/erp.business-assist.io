<?php

namespace Workhub\Telegram\Listeners;

use Workhub\School\Events\CreateClassTimetable;
use Workhub\School\Models\SchoolClass;
use Workhub\Telegram\Services\SendMsg;

class CreateClassTimetableLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateClassTimetable $event)
    {
        $timetable = $event->timetable;
        $class     = SchoolClass::find($timetable->class_id);

        if (company_setting('Telegram New Time Table')  == 'on') {

            if(!empty($class))
            {
                $uArr = [
                    'class_name' => $class->name
                ];
                SendMsg::SendMsgs($uArr , 'New Time Table');
            }
        }
    }
}
