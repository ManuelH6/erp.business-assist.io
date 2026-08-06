<?php

namespace Workhub\Slack\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Workhub\Slack\Services\SendMsg;
use Workhub\Taskly\Events\CreateProjectBug;
use Workhub\Taskly\Models\Project;

class CreateProjectBugLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateProjectBug $event)
    {
        $bug = $event->bug;
        $project = Project::where('id', $bug->project_id)->first();

        if (company_setting('Slack New Bug') == 'on') {
            $uArr = [
                'bug_name' => $bug->title,
                'project_name' => $project->name,
            ];

            SendMsg::SendMsgs($uArr, 'New Bug');
        }
    }
}
