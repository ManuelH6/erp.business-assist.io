<?php

namespace Workhub\Twilio\Listeners;

use Workhub\CMMS\Events\CreateComponent;
use Workhub\Twilio\Services\SendMsg;

class CreateComponentLis
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
    public function handle(CreateComponent $event)
    {
        if (company_setting('Twilio New Component') == 'on') {

            $request   = $event->request;
            $component = $request->name;
            $to        = \Auth::user()->mobile_no;

            if (!empty($component) && !empty($to)) {
                $uArr = [
                    'component_name' => $component,
                ];

                SendMsg::SendMsgs($to, $uArr, 'New Component');
            }
        }
    }
}
