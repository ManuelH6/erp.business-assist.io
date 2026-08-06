<?php

namespace Workhub\ZoomMeeting\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\ZoomMeeting\Models\ZoomMeeting;

class DestroyZoomMeeting
{
    use Dispatchable;

    public function __construct(
        public ZoomMeeting $meeting,
    ) {}
}