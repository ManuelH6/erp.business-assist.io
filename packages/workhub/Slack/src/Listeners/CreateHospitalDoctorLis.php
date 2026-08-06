<?php

namespace Workhub\Slack\Listeners;

use App\Models\User;
use Workhub\HospitalManagement\Events\CreateHospitalDoctor;
use Workhub\HospitalManagement\Models\HospitalSpecialization;
use Workhub\Slack\Services\SendMsg;

class CreateHospitalDoctorLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateHospitalDoctor $event)
    {
        $doctor = $event->hospitaldoctor;
        $specialization = HospitalSpecialization::find($doctor->hospital_specialization_id);
        $doctor =  User::find($doctor->user_id);

        if (company_setting('Slack New Doctor') == 'on') {
            $uArr = [
                'doctor_name' => $doctor->name,
                'specialization' => $specialization->name
            ];

            SendMsg::SendMsgs($uArr, 'New Doctor');
        }
    }
}
