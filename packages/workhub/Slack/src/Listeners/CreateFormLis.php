<?php

namespace Workhub\Slack\Listeners;

use Workhub\FormBuilder\Events\CreateForm;
use Workhub\Slack\Services\SendMsg;

class CreateFormLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateForm $event)
    {
        if (company_setting('Slack New Form') == 'on') {
            $form = $event->form;

            $uArr = [
               'name' => $form->name
            ];

            SendMsg::SendMsgs($uArr, 'New Form');
        }
    }
}