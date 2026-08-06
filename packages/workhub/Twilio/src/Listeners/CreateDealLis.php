<?php

namespace Workhub\Twilio\Listeners;

use App\Models\User;
use Workhub\Lead\Events\CreateDeal;
use Workhub\Twilio\Services\SendMsg;

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
        if (company_setting('Twilio New Deal') == 'on') {
            $request       = $event->request;
            $AssignClients = User::find($request->clients);

            foreach ($AssignClients as $AssignClient) {
                $to = $AssignClient->mobile_no;

                if (!empty($to)) {
                    $uArr = [];

                    SendMsg::SendMsgs($to, $uArr, 'New Deal');
                }
            }
        }
    }
}
