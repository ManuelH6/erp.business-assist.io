<?php

namespace Workhub\Telegram\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Account\Events\CreateVendor;
use Workhub\Telegram\Services\SendMsg;

class CreateVendorLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateVendor $event)
    {
        if(company_setting('Telegram New Vendor')  == 'on')
        {
            $uArr = [];

            SendMsg::SendMsgs($uArr , 'New Vendor');
        }
    }
}
