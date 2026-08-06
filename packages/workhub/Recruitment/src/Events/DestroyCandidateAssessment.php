<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\CandidateAssessment;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyCandidateAssessment
{
    use Dispatchable;

    public function __construct(
        public CandidateAssessment $candidateAssessment
    ) {}
}