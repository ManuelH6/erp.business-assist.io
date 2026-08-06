<?php

namespace Workhub\Slack\Listeners;

use App\Events\SentSalesProposal;
use Workhub\Slack\Services\SendMsg;

class SentSalesProposalLis
{
    public function __construct()
    {
        //
    }

    public function handle(SentSalesProposal $event)
    {
        if (company_setting('Slack Sales Proposal Status Updated') == 'on') {
            $uArr = [];
            SendMsg::SendMsgs($uArr, 'Sales Proposal Status Updated');
        }
    }
}