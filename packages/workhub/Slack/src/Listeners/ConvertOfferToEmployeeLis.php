<?php

namespace Workhub\Slack\Listeners;

use Workhub\Recruitment\Events\ConvertOfferToEmployee;
use Workhub\Slack\Services\SendMsg;

class ConvertOfferToEmployeeLis
{
    public function __construct()
    {
        //
    }

    public function handle(ConvertOfferToEmployee $event)
    {
        if (company_setting('Slack Convert To Employee')  == 'on') {
            $uArr =  [];
            SendMsg::SendMsgs($uArr, 'Convert To Employee');
        }
    }
}