<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\Hrm\Models\AllowanceType;

class CreateAllowanceType
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public AllowanceType $allowanceType
    ) {}
}