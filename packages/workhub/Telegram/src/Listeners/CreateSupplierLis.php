<?php

namespace Workhub\Telegram\Listeners;

use Workhub\Telegram\Services\SendMsg;
use App\Models\User;
use Workhub\CMMS\Events\CreateSupplier;


class CreateSupplierLis
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
    public function handle(CreateSupplier $event)
    {
        if(company_setting('Telegram New Supplier')  == 'on')
        {
            $user    = $event->supplier;
            if(!empty($user)){
                $uArr = [
                    'user_name' => $user->name,
                ];
                SendMsg::SendMsgs($uArr , 'New Supplier');
            }
        }
    }
}
