<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\CandidateOnboarding;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class UpdateCandidateOnboarding
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public CandidateOnboarding $candidateOnboarding
    ) {}
}