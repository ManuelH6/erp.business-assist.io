<?php

namespace Workhub\Telegram\Listeners;

use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Hrm\Events\UpdateLeaveStatus;
use Workhub\Telegram\Services\SendMsg;

class UpdateLeaveStatusLis
{
    public function __construct()
    {
        //
    }

    public function handle(UpdateLeaveStatus $event)
    {
        if (company_setting('Telegram Leave Approve/Reject')  == 'on')
        {
            $leave = $event->leaveapplication;
            $employee = User::where('id', '=', $leave->employee_id)->first();
            if(!empty($employee)){

                $uArr = [
                    'status' => $leave->status
                ];
                SendMsg::SendMsgs($uArr , 'Leave Approve/Reject');
            }
        }
    }
}
