<?php

namespace Workhub\Telegram\Listeners;

use Workhub\Telegram\Services\SendMsg;
use Workhub\Lead\Events\DealMoved;
use Workhub\Lead\Models\DealStage;

class DealMovedLis
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
    public function handle(DealMoved $event)
    {
        if (company_setting('Telegram Deal Moved')  == "on")
        {
            $deal     = $event->deal;
            $request  = $event->request;
            $newStage = DealStage::where('id',$request->stage_id)->first();
            if(!empty($deal) && !empty($newStage))
            {
                $uArr = [
                    'deal_name' => $deal->name,
                    'old_stage' => $deal->stage->name,
                    'new_stage' => $newStage->name,
                ];
                SendMsg::SendMsgs($uArr , 'Deal moved');
            }
        }
    }
}
