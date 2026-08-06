<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\Revenue;

class PostRevenue
{
    use Dispatchable;

    public function __construct(
        public Revenue $revenue
    ) {}
}
