<?php

namespace Workhub\Telegram\Listeners;

use App\Models\User;
use Workhub\Telegram\Services\SendMsg;
use Workhub\CMMS\Events\CreateLocation;


class CreateLocationLis
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
    public function handle(CreateLocation $event)
    {
        if(company_setting('Telegram New Location') == 'on')
        {
            $location = $event->location;
            if(!empty($location)){
                $uArr = [
                    'location_name' => $location->name,
                ];
                SendMsg::SendMsgs($uArr , 'New Location');
            }
        }
    }
}
