<?php

use Illuminate\Support\Facades\Route;
use Workhub\Slack\Http\Controllers\DashboardController;
use Workhub\Slack\Http\Controllers\SlackItemController;
use Workhub\Slack\Http\Controllers\SlackSettingsController;

Route::middleware(['web', 'auth', 'verified', 'PlanModuleCheck:Slack'])->group(function () {
    Route::get('slack/settings', [SlackSettingsController::class, 'index'])->name('slack.settings.index');
    Route::post('slack/settings/store', [SlackSettingsController::class, 'store'])->name('slack.settings.store');
});
