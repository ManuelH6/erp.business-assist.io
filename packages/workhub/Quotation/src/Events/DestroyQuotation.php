<?php

namespace Workhub\Quotation\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Quotation\Models\SalesQuotation;

class DestroyQuotation
{
    use Dispatchable;

    public function __construct(
        public SalesQuotation $quotation
    ) {}
}