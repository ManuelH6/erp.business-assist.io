<?php

namespace Workhub\Slack\Listeners;

use Workhub\Account\Events\CreateCustomer;
use Workhub\Slack\Services\SendMsg;

class CreateCustomerLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateCustomer $event)
    {
        if (company_setting('Slack New Customer') == 'on') {
            $uArr = [];
            SendMsg::SendMsgs($uArr, 'New Customer');
        }
    }
}