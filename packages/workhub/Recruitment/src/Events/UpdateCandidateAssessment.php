<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\CandidateAssessment;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class UpdateCandidateAssessment
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public CandidateAssessment $candidateAssessment
    ) {}
}