<?php

namespace Workhub\Recruitment\Events;

use Workhub\Recruitment\Models\OnboardingChecklist;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;

class UpdateOnboardingChecklist
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public OnboardingChecklist $onboardingchecklist
    ) {}
}