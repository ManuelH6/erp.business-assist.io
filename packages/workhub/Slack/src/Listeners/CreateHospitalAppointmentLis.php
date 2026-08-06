<?php

namespace Workhub\Slack\Listeners;

use App\Models\User;
use Workhub\HospitalManagement\Events\CreateHospitalAppointment;
use Workhub\HospitalManagement\Models\HospitalDoctor;
use Workhub\HospitalManagement\Models\HospitalPatient;
use Workhub\Slack\Services\SendMsg;

class CreateHospitalAppointmentLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateHospitalAppointment $event)
    {
        $hospitalappointment = $event->hospitalappointment;

        $patient = HospitalPatient::find($hospitalappointment->patient_id);
        $doctorModel = HospitalDoctor::find($hospitalappointment->doctor_id);

        $doctor = User::where('id', $doctorModel?->user_id)->select('name')->first();
        $doctorName = $doctor->name ?? '';
        $patientName = $patient->name ?? '';

        if (company_setting('Slack New Hospital Appointment') == 'on') {
            $uArr = [
                'patient_name' => $patientName,
                'doctor_name' => $doctorName,
            ];

            SendMsg::SendMsgs($uArr, 'New Hospital Appointment');
        }
    }
}
