<?php

namespace Workhub\Performance\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\Performance\Models\PerformanceIndicatorCategory;

class DestroyPerformanceIndicatorCategory
{
    use Dispatchable;

    public function __construct(
        public PerformanceIndicatorCategory $category
    ) {}
}