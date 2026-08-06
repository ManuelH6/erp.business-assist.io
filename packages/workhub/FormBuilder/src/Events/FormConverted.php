<?php

namespace Workhub\FormBuilder\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Workhub\FormBuilder\Models\Form;
use Workhub\FormBuilder\Models\FormConversion;

class FormConverted
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public Form $form,
        public FormConversion $conversion
    ) {}
}