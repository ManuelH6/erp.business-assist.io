<?php

namespace Workhub\FormBuilder\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\FormBuilder\Models\Form;

class DestroyForm
{
    use Dispatchable;

    public function __construct(
        public Form $form
    ) {}
}