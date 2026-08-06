<?php

namespace Workhub\Slack\Listeners;

use Workhub\Lead\Events\LeadConvertDeal;
use Workhub\Slack\Services\SendMsg;

class LeadConvertDealLis
{
    public function __construct()
    {
        //
    }

    public function handle(LeadConvertDeal $event)
    {
        $lead = $event->lead;

        if (company_setting('Slack Lead to Deal Conversion') == 'on') {
            $uArr = [
                'name' => $lead->name
            ];

            SendMsg::SendMsgs($uArr, 'Lead to Deal Conversion');
        }
    }
}