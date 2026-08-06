<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Deal;
use Workhub\Lead\Models\DealFile;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyDealFile
{
    use Dispatchable;

    public function __construct(
        public Deal $deal,
    ) {}
}