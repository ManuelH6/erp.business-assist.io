<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\RevenueCategories;

class DestroyRevenueCategories
{
    use Dispatchable;

    public function __construct(
        public RevenueCategories $revenuecategories
    ) {}
}
