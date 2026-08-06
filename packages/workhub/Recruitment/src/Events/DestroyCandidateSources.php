<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\CandidateSources;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyCandidateSources
{
    use Dispatchable;

    public function __construct(
        public CandidateSources $candidateSources
    ) {}
}