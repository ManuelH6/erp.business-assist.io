<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Référentiel comptable actif
    |--------------------------------------------------------------------------
    |
    | Valeurs possibles :
    |   "generic"   → Plan comptable GAAP/IFRS générique (anglo-saxon)
    |   "syscohada" → Plan comptable SYSCOHADA révisé 2017 (zone OHADA)
    |
    | Configurable dans .env :
    |   ACCOUNTING_FRAMEWORK=syscohada
    |
    */
    'framework' => env('ACCOUNTING_FRAMEWORK', 'generic'),

    /*
    |--------------------------------------------------------------------------
    | Pays OHADA membres
    |--------------------------------------------------------------------------
    |
    | Liste des 17 États membres de l'Organisation pour l'Harmonisation
    | en Afrique du Droit des Affaires (OHADA).
    |
    */
    'ohada_countries' => [
        'BEN', 'BFA', 'CMR', 'CAF', 'COM', 'COD', 'COG',
        'CIV', 'GAB', 'GIN', 'GNB', 'GNQ', 'MLI', 'NER',
        'SEN', 'TCD', 'TGO',
    ],

    /*
    |--------------------------------------------------------------------------
    | Monnaies courantes de la zone OHADA
    |--------------------------------------------------------------------------
    */
    'currencies' => [
        'XOF' => 'Franc CFA BCEAO (UEMOA)',
        'XAF' => 'Franc CFA BEAC (CEMAC)',
        'GNF' => 'Franc guinéen',
        'MRO' => 'Ouguiya mauritanien',
        'CDF' => 'Franc congolais',
        'KMF' => 'Franc comorien',
    ],

    /*
    |--------------------------------------------------------------------------
    | Paramètres fiscaux indicatifs
    |--------------------------------------------------------------------------
    |
    | Ces valeurs varient par pays. Utilisez-les comme point de départ
    | et ajustez selon la législation nationale applicable.
    |
    */
    'tax' => [
        'tva_rate_standard'  => 18.0,   // Taux TVA standard le plus courant en zone UEMOA
        'tva_rate_reduced'   => 10.0,   // Taux réduit (certains pays)
        'is_rate'            => 30.0,   // Taux IS courant (varie par pays)
        'patente'            => true,   // Taxe professionnelle (patente) — existante en zone OHADA
    ],

];
