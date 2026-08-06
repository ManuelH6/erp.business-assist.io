<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Lead;
use Workhub\Lead\Models\LeadFile;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class LeadUploadFile
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Lead $lead,
    ) {}
}