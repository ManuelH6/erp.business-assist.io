<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\JobLocation;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyJobLocation
{
    use Dispatchable;

    public function __construct(
        public JobLocation $jobLocation
    ) {}
}