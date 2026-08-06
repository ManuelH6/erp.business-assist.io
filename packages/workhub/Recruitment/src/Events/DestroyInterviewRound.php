<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\InterviewRound;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyInterviewRound
{
    use Dispatchable;

    public function __construct(
        public InterviewRound $interviewRound
    ) {}
}