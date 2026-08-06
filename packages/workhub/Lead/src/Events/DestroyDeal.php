<?php

namespace Workhub\Lead\Events;

use Workhub\Lead\Models\Deal;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyDeal
{
    use Dispatchable;

    public function __construct(
        public Deal $deal
    ) {}
}