<?php

namespace Workhub\Slack\Listeners;

use App\Models\User;
use Workhub\Account\Events\CreateRevenue;
use Workhub\Slack\Services\SendMsg;

class CreateRevenueLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateRevenue $event)
    {
        $revenue = $event->revenue;
        $customer         = User::where('id', $revenue->creator_id)->first();
        if (company_setting('Slack New Revenue') == 'on') {
            $uArr = [
                'amount' => $revenue->amount,
                'user_name' => $customer->name,
            ];

            SendMsg::SendMsgs($uArr, 'New Revenue');
        }
    }
}
