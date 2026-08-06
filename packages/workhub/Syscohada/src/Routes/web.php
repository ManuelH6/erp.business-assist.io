<?php

use Illuminate\Support\Facades\Route;
use Workhub\Syscohada\Http\Controllers\SyscohadaTftController;
use Workhub\Syscohada\Http\Controllers\SyscohadaLiasseFiscaleController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['web', 'auth', 'verified'])->group(function () {
    Route::group(['prefix' => 'syscohada'], function () {
        // Tableau des Flux de Trésorerie (TFT)
        Route::get('/tft', [SyscohadaTftController::class, 'index'])->name('syscohada.tft.index');
        Route::get('/tft/print', [SyscohadaTftController::class, 'print'])->name('syscohada.tft.print');

        // Liasse Fiscale (Bilan, Résultat, Notes)
        Route::get('/bilan', [SyscohadaLiasseFiscaleController::class, 'bilan'])->name('syscohada.bilan.index');
        Route::get('/compte-resultat', [SyscohadaLiasseFiscaleController::class, 'compteResultat'])->name('syscohada.resultat.index');
        Route::get('/notes-annexes', [SyscohadaLiasseFiscaleController::class, 'notesAnnexes'])->name('syscohada.notes.export');

        // Livres Comptables Obligatoires
        Route::get('/livre-inventaire', [\Workhub\Syscohada\Http\Controllers\SyscohadaLivreInventaireController::class, 'index'])->name('syscohada.inventaire.index');
    });
});
