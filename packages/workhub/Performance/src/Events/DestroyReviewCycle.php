<?php

namespace Workhub\Performance\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Performance\Models\PerformanceReviewCycle;

class DestroyReviewCycle
{
    use Dispatchable;

    public function __construct(
        public PerformanceReviewCycle $cycle
    ) {}
}