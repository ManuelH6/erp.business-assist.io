<?php

namespace Workhub\FormBuilder\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use App\Events\GivePermissionToRole;
use Workhub\FormBuilder\Listeners\GiveRoleToPermission;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        // Form conversion events
        GivePermissionToRole::class => [
            GiveRoleToPermission::class,
        ],
    ];
}
