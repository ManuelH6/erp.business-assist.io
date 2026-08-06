<?php

namespace Workhub\Quotation\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Quotation\Models\SalesQuotation;

class AcceptSalesQuotation
{
    use Dispatchable;
    public function __construct(
        public SalesQuotation $quotation
        ) {}
}