<?php

namespace Workhub\Performance\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\Performance\Models\PerformanceEmployeeReview;

class CreateEmployeeReview
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public PerformanceEmployeeReview $review
    ) {}
}