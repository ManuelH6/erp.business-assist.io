<?php

namespace Workhub\Slack\Listeners;

use App\Models\User;
use Workhub\Slack\Services\SendMsg;
use Workhub\Spreadsheet\Events\CreateSpreadsheet;

class CreateSpreadsheetLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateSpreadsheet $event)
    {
        $spreadsheets = $event->spreadsheet;
        $user = User::find($spreadsheets->created_by);
        
        if (company_setting('Slack New Spreadsheet') == 'on') {
            $uArr = [
                'user_name' => $user->name
            ];

            SendMsg::SendMsgs($uArr, 'New Spreadsheet');
        }
    }
}