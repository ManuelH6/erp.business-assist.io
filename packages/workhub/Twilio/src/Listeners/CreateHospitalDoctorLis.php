<?php

namespace Workhub\Twilio\Listeners;

use Workhub\HospitalManagement\Models\HospitalSpecialization;
use Workhub\HospitalManagement\Events\CreateHospitalDoctor;
use Workhub\Twilio\Services\SendMsg;

class CreateHospitalDoctorLis
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(CreateHospitalDoctor $event)
    {
        if (company_setting('Twilio New Doctor') == 'on') {

            $doctor = $event->hospitaldoctor;

            $specialization = HospitalSpecialization::find($doctor->hospital_specialization_id);
            $user           = $doctor->user;

            if (!empty($specialization) && !empty($user->mobile_no)) {
                $uArr = [
                    'doctor_name'    => $user->name,
                    'specialization' => $specialization->name
                ];

                SendMsg::SendMsgs($user->mobile_no, $uArr, 'New Doctor');
            }
        }
    }
}
