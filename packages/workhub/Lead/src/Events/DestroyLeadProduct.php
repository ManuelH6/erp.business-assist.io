<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Lead;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyLeadProduct
{
    use Dispatchable;

    public function __construct(
        public Lead $lead,
    ) {}
}