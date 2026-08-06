<?php

namespace Workhub\Telegram\Listeners;

use Workhub\Telegram\Services\SendMsg;
use Workhub\Lead\Events\CreateDeal;


class CreateDealLis
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
    public function handle(CreateDeal $event)
    {
        if (company_setting('Telegram New Deal')  == 'on')
        {
            $uArr = [];
            SendMsg::SendMsgs($uArr , 'New Deal');
        }
    }
}
