<?php

namespace Workhub\LandingPage\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\LandingPage\Models\NewsletterSubscriber;

class DestroyNewsletterSubscriber
{
    use Dispatchable;

    public function __construct(
        public NewsletterSubscriber $subscriber,
    ) {}
}