<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\Event;

class DestroyEvent
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public Event $event
    )
    {
        //
    }
}