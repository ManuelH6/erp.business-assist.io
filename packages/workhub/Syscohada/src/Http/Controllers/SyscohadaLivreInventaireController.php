<?php

namespace Workhub\Syscohada\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SyscohadaLivreInventaireController extends Controller
{
    public function index(Request $request)
    {
        if (Auth::user()->can('manage-account-reports') || Auth::user()->hasRole('company')) {
            $currentYear = date('Y');
            $asOfDate = $request->as_of_date ?: "$currentYear-12-31";

            // TODO : Lier le module 'ProductService' ou 'Inventory' 
            // pour lister les quantités physiques vs valeurs comptables
            $inventaireData = [
                'immobilisations' => [],
                'stocks' => [],
                'caisse' => [],
            ];

            return response()->json([
                'message' => 'Livre d\'inventaire SYSCOHADA (en construction)',
                'as_of_date' => $asOfDate,
                'data' => $inventaireData
            ]);
        }
        return back()->with('error', __('Permission denied.'));
    }
}
