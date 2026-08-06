<?php

namespace Workhub\Account\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Account\Services\BankTransactionsService;
use Workhub\Account\Services\JournalService;
use Workhub\MobileServiceManagement\Events\UpdateMobileServicePaymentStatus;

class UpdateMobileServicePaymentStatusLis
{
    protected $journalService;
    protected $bankTransactionsService;

    public function __construct(JournalService $journalService, BankTransactionsService $bankTransactionsService)
    {
        $this->journalService = $journalService;
        $this->bankTransactionsService = $bankTransactionsService;
    }

    public function handle(UpdateMobileServicePaymentStatus $event)
    {
        if(Module_is_active('Account'))
        {
            $this->bankTransactionsService->createMobileServicePayment($event->payment);
            $this->journalService->createMobileServicePaymentJournal($event->payment);
        }
    }
}
