<?php

namespace Workhub\Training\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Training\Models\TrainingTask;

class DestroyTrainingTask
{
    use Dispatchable;

    public function __construct(
        public TrainingTask $task
    ) {}
}