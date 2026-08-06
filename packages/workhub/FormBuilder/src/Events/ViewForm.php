<?php

namespace Workhub\FormBuilder\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Workhub\FormBuilder\Models\Form;
use Workhub\FormBuilder\Models\FormResponse;

class ViewForm
{
    use Dispatchable;

    public function __construct(
        public Form $form,
        public FormResponse $response
    ) {}
}