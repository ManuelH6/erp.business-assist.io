<?php

namespace Workhub\Performance\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\Performance\Models\PerformanceIndicatorCategory;

class CreatePerformanceIndicatorCategory
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public PerformanceIndicatorCategory $category
    ) {}
}