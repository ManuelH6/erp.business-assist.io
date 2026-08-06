<?php

namespace Workhub\Slack\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Lead\Events\CreateDeal;
use Workhub\Slack\Services\SendMsg;

class CreateDealLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateDeal $event)
    {
        if (company_setting('Slack New Deal') == 'on') {
            $uArr = [];

            SendMsg::SendMsgs($uArr, 'New Deal');
        }
    }
}