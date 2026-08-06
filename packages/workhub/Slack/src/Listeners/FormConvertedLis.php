<?php

namespace Workhub\Slack\Listeners;

use Workhub\FormBuilder\Events\FormConverted;
use Workhub\Slack\Services\SendMsg;

class FormConvertedLis
{
    public function __construct()
    {
        //
    }

    public function handle(FormConverted $event)
    {
        if (company_setting('Slack Convert To Modal') == 'on') {
            $uArr = [];

            SendMsg::SendMsgs($uArr, 'Convert To Modal');
        }
    }
}