<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Deal;
use Workhub\Lead\Models\DealFile;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class DealUploadFile
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Deal $deal,
    ) {}
}