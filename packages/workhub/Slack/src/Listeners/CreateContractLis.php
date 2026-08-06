<?php

namespace Workhub\Slack\Listeners;

use Workhub\Contract\Events\CreateContract;
use Workhub\Contract\Models\Contract;
use Workhub\Slack\Services\SendMsg;

class CreateContractLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateContract $event)
    {
        $contract = $event->contract;

        if (company_setting('Slack New Contract') == 'on') {
            $uArr = [
                'contract_number' => $contract->contract_number,
            ];

            SendMsg::SendMsgs($uArr, 'New Contract');
        }
    }
}
