<?php

namespace Workhub\Telegram\Listeners;

use Workhub\Telegram\Services\SendMsg;
use Workhub\VisitorManagement\Events\CreateVisitor;

class CreateVisitorLis
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(CreateVisitor $event)
    {
        $visitor = $event->visitor;

        if (company_setting('Telegram New Visitor')  == 'on') {

            $uArr = [
                'name' => $visitor->name,
            ];
            SendMsg::SendMsgs($uArr , 'New Visitor');
        }
    }
}
