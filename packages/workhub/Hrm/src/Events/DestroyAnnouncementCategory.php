<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Hrm\Models\AnnouncementCategory;

class DestroyAnnouncementCategory
{
    use Dispatchable, SerializesModels;

    public function __construct(
          public AnnouncementCategory $announcementCategory
    )
    {
        //
    }
}