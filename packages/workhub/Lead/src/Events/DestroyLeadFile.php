<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Lead;
use Workhub\Lead\Models\LeadFile;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyLeadFile
{
    use Dispatchable;

    public function __construct(
        public Lead $lead,
    ) {}
}