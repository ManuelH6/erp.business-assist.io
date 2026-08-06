<?php

namespace Workhub\Telegram\Listeners;

use Workhub\Feedback\Events\CreateHistory;
use Workhub\Feedback\Models\TemplateModule;
use Workhub\Telegram\Services\SendMsg;

class CreateHistoryLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateHistory $event)
    {
        $rating = $event->history;
        $module = TemplateModule::find($rating->module_id);
        $user   = (json_decode($rating->content));
        if (company_setting('Telegram New Feedback Rating')  == 'on') {

            if(!empty($module) && !empty($user))
            {
                $uArr = [
                    'module_name' => $module->submodule,
                    'user_name' => $user->name
                ];
                SendMsg::SendMsgs($uArr , 'New Feedback Rating');
            }
        }
    }
}
