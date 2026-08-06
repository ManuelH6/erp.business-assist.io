<?php

namespace Workhub\Performance\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Performance\Models\PerformanceIndicator;

class DestroyPerformanceIndicator
{
    use Dispatchable;

    public function __construct(
        public PerformanceIndicator $indicator
    ) {}
}