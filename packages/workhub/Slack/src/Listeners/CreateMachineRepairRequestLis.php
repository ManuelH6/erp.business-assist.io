<?php

namespace Workhub\Slack\Listeners;

use Workhub\MachineRepairManagement\Events\CreateMachineRepairRequest;
use Workhub\MachineRepairManagement\Models\Machine;
use Workhub\Slack\Services\SendMsg;

class CreateMachineRepairRequestLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateMachineRepairRequest $event)
    {
        $repair_request = $event->machinerepairrequest;
        $machine = Machine::find($repair_request->machine_id);
        
        if (company_setting('Slack New Repair Request') == 'on') {
            $uArr = [
                'machine_name' => $machine->machine_name
            ];

            SendMsg::SendMsgs($uArr, 'New Repair Request');
        }
    }
}