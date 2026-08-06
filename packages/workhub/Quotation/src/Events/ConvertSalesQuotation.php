<?php

namespace Workhub\Quotation\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Quotation\Models\SalesQuotation;
use App\Models\SalesInvoice;

class ConvertSalesQuotation
{
    use Dispatchable;

    public function __construct(
        public SalesQuotation $quotation,
        public SalesInvoice $invoice
    ) {}
}