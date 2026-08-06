<?php

namespace Workhub\Syscohada\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SyscohadaLiasseFiscaleController extends Controller
{
    public function bilan(Request $request)
    {
        if (Auth::user()->can('manage-account-reports') || Auth::user()->hasRole('company')) {
            // TODO: Calculer le Bilan au format SYSCOHADA (Actif Immo, Circulant, Trésorerie vs Capitaux, Dettes)
            $bilanData = [
                'actif_immobilise' => 0,
                'actif_circulant' => 0,
                'tresorerie_actif' => 0,
                'total_actif' => 0,
                'ressources_durables' => 0,
                'passif_circulant' => 0,
                'tresorerie_passif' => 0,
                'total_passif' => 0,
            ];

            return Inertia::render('Syscohada/Liasse/Bilan', [
                'bilanData' => $bilanData,
            ]);
        }
        return back()->with('error', __('Permission denied.'));
    }

    public function compteResultat(Request $request)
    {
        if (Auth::user()->can('manage-account-reports') || Auth::user()->hasRole('company')) {
            // TODO: Calculer le Compte de Résultat format SYSCOHADA (Marge, Valeur Ajoutée, EBE, Résultat d'Exploitation, HAO)
            $resultatData = [
                'chiffre_affaires' => 0,
                'achats_consommes' => 0,
                'valeur_ajoutee' => 0,
                'charges_personnel' => 0,
                'excedent_brut_exploitation' => 0,
                'dotations' => 0,
                'resultat_exploitation' => 0,
                'resultat_financier' => 0,
                'resultat_hao' => 0,
                'impot' => 0,
                'resultat_net' => 0,
            ];

            return Inertia::render('Syscohada/Liasse/CompteResultat', [
                'resultatData' => $resultatData,
            ]);
        }
        return back()->with('error', __('Permission denied.'));
    }

    public function notesAnnexes(Request $request)
    {
        if (Auth::user()->can('manage-account-reports') || Auth::user()->hasRole('company')) {
            // TODO: Exporter une balance brute et les mouvements majeurs pour les notes annexes
            return response()->json([
                'message' => 'Export des soldes bruts pour les Notes Annexes en cours de développement.',
                'data' => []
            ]);
        }
        return back()->with('error', __('Permission denied.'));
    }
}
