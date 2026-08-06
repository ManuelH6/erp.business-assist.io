<?php

namespace Workhub\Training\Events;

use Workhub\Training\Models\Training;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyTraining
{
    use Dispatchable;

    public function __construct(
        public Training $training
    ) {}
}