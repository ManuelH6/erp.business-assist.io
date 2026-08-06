<?php

namespace Workhub\Account\Listeners;

use Workhub\Account\Models\BankAccount;
use Workhub\Hrm\Events\PaySalary;
use Workhub\Account\Services\JournalService;
use Workhub\Account\Services\BankTransactionsService;
use Workhub\Account\Models\ChartOfAccount;

class PaySalaryListener
{
    protected $journalService;
    protected $bankTransactionsService;

    public function __construct(JournalService $journalService, BankTransactionsService $bankTransactionsService)
    {
        $this->journalService = $journalService;
        $this->bankTransactionsService = $bankTransactionsService;
    }

    public function handle(PaySalary $event)
    {
        if (Module_is_active('Account'))
        {
            $this->journalService->createPayrollJournal($event->payrollEntry);
            $this->bankTransactionsService->createPayrollPayment($event->payrollEntry);
        }
    }
}

