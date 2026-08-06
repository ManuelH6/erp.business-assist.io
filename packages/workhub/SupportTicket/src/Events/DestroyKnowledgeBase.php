<?php

namespace Workhub\SupportTicket\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\SupportTicket\Models\KnowledgeBase;

class DestroyKnowledgeBase
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public KnowledgeBase $knowledgeBase
    ) {}
}