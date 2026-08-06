<?php

use Illuminate\Support\Facades\Route;
use Workhub\Training\Http\Controllers\TrainingTypeController;
use Workhub\Training\Http\Controllers\TrainerController;
use Workhub\Training\Http\Controllers\TrainingController;
use Workhub\Training\Http\Controllers\TrainingTaskController;
use Workhub\Training\Http\Controllers\TrainingFeedbackController;

Route::middleware(['web', 'auth', 'verified', 'PlanModuleCheck:Training'])->group(function () {
    Route::prefix('training')->name('training.')->group(function () {
        Route::resource('training-types', TrainingTypeController::class);
        Route::resource('trainers', TrainerController::class);
        Route::resource('trainings', TrainingController::class);
        Route::resource('trainings.tasks', TrainingTaskController::class)->except(['destroy']);
        Route::patch('trainings/{training}/tasks/{task}/complete', [TrainingTaskController::class, 'complete'])->name('trainings.tasks.complete');
        Route::delete('tasks/{task}', [TrainingTaskController::class, 'destroy'])->name('tasks.destroy');
        Route::resource('tasks.feedbacks', TrainingFeedbackController::class);
    });
});