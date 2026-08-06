<?php

namespace Workhub\Hrm\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Http\Request;
use Workhub\Hrm\Models\Promotion;

class CreatePromotion
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Request $request,
        public Promotion $promotion
    ) {}
}