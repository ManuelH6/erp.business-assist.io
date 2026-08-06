<?php

namespace Workhub\Telegram\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Telegram\Services\SendMsg;
use Workhub\ToDo\Events\CreateToDo;

class CreateToDoLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateToDo $event)
    {
        $toDo = $event->todo;

        if (company_setting('Telegram New To Do')  == 'on') {

            $uArr = [
                'name' => $toDo->title,
                'module' => $toDo->sub_module
            ];
            SendMsg::SendMsgs($uArr , 'New To Do');
        }
    }
}
