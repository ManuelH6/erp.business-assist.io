<?php

namespace Workhub\Slack\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Hrm\Events\CreatePayroll;
use Workhub\Slack\Services\SendMsg;

class CreatePayrollLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreatePayroll $event)
    {
        if (company_setting('Slack New Monthly Payslip') == 'on') {
            $payroll = $event->payroll;
            $uArr = [
                'month'=>$month
            ];

            SendMsg::SendMsgs($uArr, 'New Monthly Payslip');
        }
    }
}