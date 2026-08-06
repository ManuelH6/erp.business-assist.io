<?php

namespace Workhub\Slack\Listeners;

use Workhub\School\Events\CreateSubject;
use Workhub\School\Models\SchoolClass;
use Workhub\Slack\Services\SendMsg;

class CreateSubjectLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateSubject $event)
    {
        $subject = $event->subject;
        
        if (company_setting('Slack New Subject') == 'on') {
            $uArr = [
                'subject_name' => $subject->name,
            ];

            SendMsg::SendMsgs($uArr, 'New Subject');
        }
    }
}