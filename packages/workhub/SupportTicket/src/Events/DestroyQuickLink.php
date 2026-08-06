<?php

namespace Workhub\SupportTicket\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\SupportTicket\Models\QuickLink;

class DestroyQuickLink
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public QuickLink $quickLink
    ) {}
}