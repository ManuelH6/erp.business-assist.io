<?php

namespace Workhub\Slack\Listeners;

use Workhub\Slack\Services\SendMsg;
use Workhub\Taskly\Events\CreateProjectMilestone;

class CreateProjectMilestoneLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateProjectMilestone $event)
    {
        if (company_setting('Slack New Milestone') == 'on') {
            $uArr = [];
            SendMsg::SendMsgs($uArr, 'New Milestone');
        }
    }
}