<?php

namespace Workhub\Quotation\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\Quotation\Models\SalesQuotation;

class UpdateQuotation
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public SalesQuotation $quotation
    ) {}
}