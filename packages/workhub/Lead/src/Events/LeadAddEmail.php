<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Lead;
use Workhub\Lead\Models\LeadEmail;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class LeadAddEmail
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Lead $lead,
        public LeadEmail $lead_email,
    ) {}
}