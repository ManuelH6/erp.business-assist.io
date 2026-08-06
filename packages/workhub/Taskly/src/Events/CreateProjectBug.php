<?php

namespace Workhub\Taskly\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\Taskly\Models\ProjectBug;

class CreateProjectBug
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public ProjectBug $bug
    ) {}
}
