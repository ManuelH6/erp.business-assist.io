<?php

namespace Workhub\Contract\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\Contract\Models\Contract;

class DestroyContract
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Contract $contract
    ) {}
}