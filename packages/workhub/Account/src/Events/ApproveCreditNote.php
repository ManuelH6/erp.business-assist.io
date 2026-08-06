<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\CreditNote;

class ApproveCreditNote
{
    use Dispatchable;

    public function __construct(
        public CreditNote $creditNote
    ) {}
}