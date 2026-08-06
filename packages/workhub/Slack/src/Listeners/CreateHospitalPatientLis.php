<?php

namespace Workhub\Slack\Listeners;

use Workhub\HospitalManagement\Events\CreateHospitalPatient;
use Workhub\Slack\Services\SendMsg;

class CreateHospitalPatientLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateHospitalPatient $event)
    {
        $patient = $event->hospitalpatient;

        if (company_setting('Slack New Patient') == 'on') {
            $uArr = [
                'patient_name' => $patient->name
            ];
            SendMsg::SendMsgs($uArr, 'New Patient');
        }
    }
}