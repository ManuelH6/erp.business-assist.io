<?php

namespace Workhub\Account\Listeners;

use Workhub\Account\Services\JournalService;
use Workhub\Retainer\Events\ConvertSalesRetainer;

class ConvertSalesRetainerListener
{
    protected $journalService;

    public function __construct(JournalService $journalService)
    {
        $this->journalService = $journalService;
    }

    public function handle(ConvertSalesRetainer $event)
    {
        if (Module_is_active('Account')) {
            $this->journalService->createSalesInvoiceJournal($event->invoice);
            $this->journalService->createSalesRetainerToInvoiceJournal($event->retainer);
            $this->journalService->createSalesCOGSJournal($event->invoice);
        }
    }
}
