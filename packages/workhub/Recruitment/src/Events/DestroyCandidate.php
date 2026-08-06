<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\Candidate;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyCandidate
{
    use Dispatchable;

    public function __construct(
        public Candidate $candidate
    ) {}
}