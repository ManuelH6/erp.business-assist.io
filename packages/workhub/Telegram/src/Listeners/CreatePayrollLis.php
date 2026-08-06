<?php

namespace Workhub\Telegram\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Hrm\Events\CreatePayroll;
use Workhub\Telegram\Services\SendMsg;

class CreatePayrollLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreatePayroll $event)
    {
        if(company_setting('Telegram New Monthly Payslip')  == 'on')
        {
            $payslipEmployee = $event->payroll;
            $month = date('M Y', strtotime($payslipEmployee->pay_period_start));
            $uArr = [
                'month'=>$month
            ];
            SendMsg::SendMsgs($uArr , 'New Monthly Payslip');
        }
    }
}
