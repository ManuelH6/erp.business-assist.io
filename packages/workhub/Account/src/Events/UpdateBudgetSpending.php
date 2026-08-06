<?php

namespace Workhub\Account\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Account\Models\JournalEntry;

class UpdateBudgetSpending
{
    use Dispatchable;

    public function __construct(
        public JournalEntry $journalEntry,
    ) {}
}
