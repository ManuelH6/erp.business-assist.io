<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\InterviewType;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyInterviewType
{
    use Dispatchable;

    public function __construct(
        public InterviewType $interviewType
    ) {}
}