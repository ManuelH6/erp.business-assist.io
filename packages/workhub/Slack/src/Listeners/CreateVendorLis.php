<?php

namespace Workhub\Slack\Listeners;

use Workhub\Account\Events\CreateVendor;
use Workhub\Slack\Services\SendMsg;

class CreateVendorLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateVendor $event)
    {
        if (company_setting('Slack New Vendor') == 'on') {
            $uArr = [];
            SendMsg::SendMsgs($uArr, 'New Vendor');
        }
    }
}