<?php

namespace Workhub\Slack\Listeners;

use Workhub\Retainer\Events\CreateRetainerPayment;
use Workhub\Slack\Services\SendMsg;

class CreateRetainerPaymentLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateRetainerPayment $event)
    {
        if (company_setting('Slack New Retainer Payment')  == 'on') {
            $uArr = [];

            SendMsg::SendMsgs($uArr, 'New Retainer Payment');
        }
    }
}