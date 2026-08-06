<?php

namespace Workhub\SupportTicket\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\SupportTicket\Models\Ticket;
use Workhub\SupportTicket\Models\Conversion;

class ReplyTicket
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public Conversion $conversion,
        public Ticket $ticket
    ) {}
}