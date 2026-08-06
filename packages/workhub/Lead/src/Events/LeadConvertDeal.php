<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Lead;
use Workhub\Lead\Models\Deal;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class LeadConvertDeal
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Lead $lead,
    ) {}
}