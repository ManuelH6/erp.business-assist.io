<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\CandidateOnboarding;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyCandidateOnboarding
{
    use Dispatchable;

    public function __construct(
        public CandidateOnboarding $candidateOnboarding
    ) {}
}