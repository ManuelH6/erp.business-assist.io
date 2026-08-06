<?php

namespace Workhub\Goal\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Account\Events\UpdateBudgetSpending;
use Workhub\Goal\Services\GoalService;

class UpdateBudgetSpendingLis
{
    protected $goalService;

    public function __construct(GoalService $goalService)
    {
        $this->goalService = $goalService;
    }

    public function handle(UpdateBudgetSpending $event)
    {
        if (Module_is_active('Goal')) {

            $this->goalService->autoContributeFromJournalEntry($event->journalEntry);
        }
    }
}
