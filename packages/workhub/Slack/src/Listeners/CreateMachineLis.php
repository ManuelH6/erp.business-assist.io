<?php

namespace Workhub\Slack\Listeners;

use Workhub\MachineRepairManagement\Events\CreateMachine;
use Workhub\Slack\Services\SendMsg;

class CreateMachineLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateMachine $event)
    {
        $machine = $event->machine;
        
        if (company_setting('Slack New Machine') == 'on') {
            $uArr = [
                'machine_name' => $machine->machine_name
            ];

            SendMsg::SendMsgs($uArr, 'New Machine');
        }
    }
}