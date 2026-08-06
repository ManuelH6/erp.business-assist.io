<?php

namespace Workhub\Training\Events;

use Workhub\Training\Models\Trainer;
use Illuminate\Foundation\Events\Dispatchable;

class DestroyTrainer
{
    use Dispatchable;

    public function __construct(
        public Trainer $trainer
    ) {}
}