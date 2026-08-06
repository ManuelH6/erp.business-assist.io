<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\RevenueCategories;

class UpdateRevenueCategories
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public RevenueCategories $revenuecategories
    ) {}
}
