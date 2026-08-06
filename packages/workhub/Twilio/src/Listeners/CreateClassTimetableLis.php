<?php

namespace Workhub\Twilio\Listeners;

use Workhub\School\Events\CreateClassTimetable;
use Workhub\School\Models\SchoolStudent;
use Workhub\Twilio\Services\SendMsg;

class CreateClassTimetableLis
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(CreateClassTimetable $event)
    {
        if (company_setting('Twilio New Time Table') == 'on') {

            $timetable = $event->timetable;

            $class    = $timetable->class;
            $students = SchoolStudent::where('class_id', $class->id)->get();

            foreach ($students as $student) {
                $studentInfo = $student->admission->studentInfo;

                if (!empty($class) && !empty($studentInfo->phone)) {
                    $uArr = [
                        'class_name' => $class->name,
                    ];

                    SendMsg::SendMsgs($studentInfo->phone, $uArr, 'New Time Table');
                }
            }

        }
    }
}
