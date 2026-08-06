<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\LeadTask;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyLeadTask
{
    use Dispatchable;

    public function __construct(
        public LeadTask $leadTask
    ) {}
}