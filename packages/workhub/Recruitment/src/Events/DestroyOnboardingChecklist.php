<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\OnboardingChecklist;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyOnboardingChecklist
{
    use Dispatchable;

    public function __construct(
        public OnboardingChecklist $onboardingchecklist
    ) {}
}