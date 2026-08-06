<?php

namespace Workhub\Slack\Listeners;

use Workhub\Slack\Services\SendMsg;
use Workhub\VisitorManagement\Events\CreateVisitor;

class CreateVisitorLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateVisitor $event)
    {
        $visitor = $event->visitor;

        if (company_setting('Slack New Visitor') == 'on') {
            $uArr = [
                'name' => $visitor->name,
            ];

            SendMsg::SendMsgs($uArr, 'New Visitor');
        }
    }
}