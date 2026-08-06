<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\Account\Models\VendorPayment;

class CreateVendorPayment
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public VendorPayment $vendorPayment
    ) {}
}