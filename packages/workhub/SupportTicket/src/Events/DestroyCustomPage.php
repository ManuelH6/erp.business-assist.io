<?php

namespace Workhub\SupportTicket\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\SupportTicket\Models\SupportTicketCustomPage;

class DestroyCustomPage
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public SupportTicketCustomPage $customPage
    ) {}
}