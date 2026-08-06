<?php

namespace Workhub\Syscohada\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SyscohadaTftController extends Controller
{
    public function index(Request $request)
    {
        // En attendant que les permissions Syscohada soient définies, 
        // on se base sur le droit des rapports comptables classiques (ou on laisse ouvert pour l'admin).
        if (Auth::user()->can('manage-account-reports') || Auth::user()->hasRole('company')) {
            $currentYear = date('Y');
            $fromDate = $request->from_date ?: "$currentYear-01-01";
            $toDate = $request->to_date ?: "$currentYear-12-31";

            // TODO : Intégrer le calcul complexe du TFT (Méthode indirecte SYSCOHADA)
            $tftData = [
                'resultat_net' => 0,
                'dotations' => 0,
                'reprises' => 0,
                'capacite_autofinancement' => 0,
                'variation_bfr' => 0,
                'flux_tresorerie_activites_ordinaires' => 0,
                'flux_tresorerie_investissements' => 0,
                'flux_tresorerie_financements' => 0,
                'variation_nette_tresorerie' => 0,
                'tresorerie_ouverture' => 0,
                'tresorerie_cloture' => 0,
            ];

            return Inertia::render('Syscohada/Tft/Index', [
                'tftData' => $tftData,
                'fromDate' => $fromDate,
                'toDate' => $toDate,
            ]);
        } else {
            return back()->with('error', __('Permission denied.'));
        }
    }

    public function print(Request $request)
    {
        if (Auth::user()->can('manage-account-reports') || Auth::user()->hasRole('company')) {
            // Logique d'impression
            return back()->with('error', __('TFT Print view not implemented yet.'));
        }
        return back()->with('error', __('Permission denied.'));
    }
}
