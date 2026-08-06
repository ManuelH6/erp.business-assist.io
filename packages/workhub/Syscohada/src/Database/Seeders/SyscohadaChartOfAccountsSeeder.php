<?php

namespace Workhub\Syscohada\Database\Seeders;

use Illuminate\Database\Seeder;
use Workhub\Account\Models\AccountType;
use Workhub\Account\Models\ChartOfAccount;

/**
 * Peuple le plan comptable selon le SYSCOHADA révisé 2017.
 *
 * Structure :
 *   Classe 1 → Ressources durables (capitaux propres, emprunts LT)
 *   Classe 2 → Actif immobilisé
 *   Classe 3 → Stocks
 *   Classe 4 → Tiers (clients, fournisseurs, État, personnel)
 *   Classe 5 → Trésorerie
 *   Classe 6 → Charges des activités ordinaires
 *   Classe 7 → Produits des activités ordinaires
 *   Classe 8 → Comptes HAO + Impôt sur le résultat
 */
class SyscohadaChartOfAccountsSeeder extends Seeder
{
    public function run(int $company_id): void
    {
        // Éviter les doublons si déjà seedé
        $exist = ChartOfAccount::where('created_by', $company_id)
            ->where('account_code', '101')
            ->first();

        if ($exist) {
            $this->command?->line("     Plan de comptes SYSCOHADA déjà présent pour l'entreprise #{$company_id}. Ignoré.");
            return;
        }

        // Supprimer le plan de comptes générique existant
        ChartOfAccount::where('created_by', $company_id)->delete();

        $accountTypes = AccountType::where('created_by', $company_id)
            ->get()
            ->keyBy('code');

        if ($accountTypes->isEmpty()) {
            $this->command?->error("     Aucun type de compte pour l'entreprise #{$company_id}. Lancez SyscohadaAccountTypesSeeder d'abord.");
            return;
        }

        $accounts = [

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 1 — RESSOURCES DURABLES
            // type_code = C1
            // ═══════════════════════════════════════════════════════════════

            // Capitaux propres et assimilés
            ['type_code' => 'C1', 'account_code' => '101', 'account_name' => 'Capital social',                         'normal_balance' => 'credit', 'description' => 'Apports des associés (SA, SARL…)'],
            ['type_code' => 'C1', 'account_code' => '102', 'account_name' => 'Capital par dotation',                   'normal_balance' => 'credit', 'description' => 'Capital alloué (établissements publics)'],
            ['type_code' => 'C1', 'account_code' => '104', 'account_name' => 'Comptes d\'apport en société',           'normal_balance' => 'credit', 'description' => 'Apports en nature ou en numéraire en cours de réalisation'],
            ['type_code' => 'C1', 'account_code' => '105', 'account_name' => 'Primes liées au capital social',         'normal_balance' => 'credit', 'description' => 'Primes d\'émission, de fusion, d\'apport'],
            ['type_code' => 'C1', 'account_code' => '106', 'account_name' => 'Écarts de réévaluation',                'normal_balance' => 'credit', 'description' => 'Ajustement de valeur lors de réévaluations légales'],
            ['type_code' => 'C1', 'account_code' => '111', 'account_name' => 'Réserve légale',                         'normal_balance' => 'credit', 'description' => '5 % du bénéfice jusqu\'à 10 % du capital (obligation légale)'],
            ['type_code' => 'C1', 'account_code' => '112', 'account_name' => 'Réserves statutaires ou contractuelles', 'normal_balance' => 'credit', 'description' => 'Réserves prévues par les statuts'],
            ['type_code' => 'C1', 'account_code' => '118', 'account_name' => 'Autres réserves',                        'normal_balance' => 'credit', 'description' => 'Réserves facultatives'],
            ['type_code' => 'C1', 'account_code' => '12',  'account_name' => 'Report à nouveau',                       'normal_balance' => 'credit', 'description' => 'Bénéfice ou perte reporté(e) de l\'exercice précédent'],
            ['type_code' => 'C1', 'account_code' => '13',  'account_name' => 'Résultat net de l\'exercice',            'normal_balance' => 'credit', 'description' => 'Bénéfice (+) ou perte (-) de l\'exercice en cours'],
            ['type_code' => 'C1', 'account_code' => '14',  'account_name' => 'Subventions d\'investissement',          'normal_balance' => 'credit', 'description' => 'Aides publiques à l\'acquisition d\'immobilisations'],
            ['type_code' => 'C1', 'account_code' => '15',  'account_name' => 'Provisions réglementées et fonds assimilés', 'normal_balance' => 'credit', 'description' => 'Provisions à caractère fiscal ou réglementaire'],

            // Emprunts et dettes financières
            ['type_code' => 'C1', 'account_code' => '161', 'account_name' => 'Emprunts obligataires',                  'normal_balance' => 'credit', 'description' => 'Dettes résultant d\'émissions d\'obligations'],
            ['type_code' => 'C1', 'account_code' => '162', 'account_name' => 'Emprunts auprès des établissements de crédit', 'normal_balance' => 'credit', 'description' => 'Dettes bancaires à long terme'],
            ['type_code' => 'C1', 'account_code' => '163', 'account_name' => 'Avances reçues de l\'État',              'normal_balance' => 'credit', 'description' => 'Avances remboursables accordées par l\'État'],
            ['type_code' => 'C1', 'account_code' => '164', 'account_name' => 'Avances reçues des associés',            'normal_balance' => 'credit', 'description' => 'Comptes courants bloqués des associés'],
            ['type_code' => 'C1', 'account_code' => '165', 'account_name' => 'Dépôts et cautionnements reçus',         'normal_balance' => 'credit', 'description' => 'Garanties et cautions versées par des tiers'],
            ['type_code' => 'C1', 'account_code' => '167', 'account_name' => 'Dettes de crédit-bail et contrats assimilés', 'normal_balance' => 'credit', 'description' => 'Emprunts équivalents à la valeur du bien pris en leasing'],
            ['type_code' => 'C1', 'account_code' => '168', 'account_name' => 'Autres emprunts et dettes assimilées',   'normal_balance' => 'credit', 'description' => 'Divers emprunts à long terme'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 2 — ACTIF IMMOBILISÉ
            // type_code = C2
            // ═══════════════════════════════════════════════════════════════

            // Immobilisations incorporelles
            ['type_code' => 'C2', 'account_code' => '211', 'account_name' => 'Frais de développement capitalisés',     'normal_balance' => 'debit',  'description' => 'Coûts de développement activés selon critères SYSCOHADA'],
            ['type_code' => 'C2', 'account_code' => '212', 'account_name' => 'Brevets, licences, logiciels',           'normal_balance' => 'debit',  'description' => 'Propriété intellectuelle et logiciels'],
            ['type_code' => 'C2', 'account_code' => '213', 'account_name' => 'Fonds commercial',                       'normal_balance' => 'debit',  'description' => 'Clientèle, achalandage, droit au bail'],
            ['type_code' => 'C2', 'account_code' => '214', 'account_name' => 'Droit au bail',                          'normal_balance' => 'debit',  'description' => 'Valeur du droit d\'occuper un local commercial'],
            ['type_code' => 'C2', 'account_code' => '218', 'account_name' => 'Autres immobilisations incorporelles',   'normal_balance' => 'debit',  'description' => 'Autres actifs incorporels'],

            // Amortissements incorporels (comptes soustractifs)
            ['type_code' => 'C2', 'account_code' => '281', 'account_name' => 'Amortissements des immobilisations incorporelles', 'normal_balance' => 'credit', 'description' => 'Dépréciation cumulée des actifs incorporels'],

            // Immobilisations corporelles
            ['type_code' => 'C2', 'account_code' => '221', 'account_name' => 'Terrains agricoles et forestiers',       'normal_balance' => 'debit',  'description' => 'Terrains à usage agricole ou forestier'],
            ['type_code' => 'C2', 'account_code' => '222', 'account_name' => 'Terrains nus',                           'normal_balance' => 'debit',  'description' => 'Terrains non bâtis'],
            ['type_code' => 'C2', 'account_code' => '223', 'account_name' => 'Terrains bâtis',                         'normal_balance' => 'debit',  'description' => 'Terrains avec constructions'],
            ['type_code' => 'C2', 'account_code' => '224', 'account_name' => 'Terrains de gisement',                   'normal_balance' => 'debit',  'description' => 'Carrières, mines, gisements'],
            ['type_code' => 'C2', 'account_code' => '231', 'account_name' => 'Bâtiments administratifs et commerciaux', 'normal_balance' => 'debit', 'description' => 'Bureaux et locaux commerciaux'],
            ['type_code' => 'C2', 'account_code' => '232', 'account_name' => 'Bâtiments industriels',                  'normal_balance' => 'debit',  'description' => 'Usines, entrepôts, ateliers'],
            ['type_code' => 'C2', 'account_code' => '233', 'account_name' => 'Ouvrages d\'infrastructure',             'normal_balance' => 'debit',  'description' => 'Routes, ponts, réseaux'],
            ['type_code' => 'C2', 'account_code' => '241', 'account_name' => 'Matériel et outillage industriel',       'normal_balance' => 'debit',  'description' => 'Machines, équipements de production'],
            ['type_code' => 'C2', 'account_code' => '244', 'account_name' => 'Matériel de transport',                  'normal_balance' => 'debit',  'description' => 'Véhicules de l\'entreprise'],
            ['type_code' => 'C2', 'account_code' => '245', 'account_name' => 'Matériel de bureau et informatique',     'normal_balance' => 'debit',  'description' => 'Ordinateurs, imprimantes, mobilier de bureau'],
            ['type_code' => 'C2', 'account_code' => '248', 'account_name' => 'Autres matériels',                       'normal_balance' => 'debit',  'description' => 'Autres équipements corporels'],
            ['type_code' => 'C2', 'account_code' => '25',  'account_name' => 'Avances et acomptes versés sur immobilisations', 'normal_balance' => 'debit',  'description' => 'Acomptes sur achats d\'immos et immobilisations en crédit-bail'],

            // Amortissements corporels
            ['type_code' => 'C2', 'account_code' => '283', 'account_name' => 'Amortissements des bâtiments',           'normal_balance' => 'credit', 'description' => 'Dépréciation cumulée des bâtiments'],
            ['type_code' => 'C2', 'account_code' => '284', 'account_name' => 'Amortissements du matériel',             'normal_balance' => 'credit', 'description' => 'Dépréciation cumulée du matériel et outillage'],
            ['type_code' => 'C2', 'account_code' => '285', 'account_name' => 'Amortissements du matériel de transport', 'normal_balance' => 'credit', 'description' => 'Dépréciation cumulée des véhicules'],
            ['type_code' => 'C2', 'account_code' => '286', 'account_name' => 'Amortissements du matériel de bureau',   'normal_balance' => 'credit', 'description' => 'Dépréciation cumulée du matériel informatique'],

            // Immobilisations financières
            ['type_code' => 'C2', 'account_code' => '261', 'account_name' => 'Titres de participation',                'normal_balance' => 'debit',  'description' => 'Actions et parts détenues dans d\'autres sociétés (> 10 %)'],
            ['type_code' => 'C2', 'account_code' => '262', 'account_name' => 'Autres titres immobilisés',              'normal_balance' => 'debit',  'description' => 'Placements à long terme'],
            ['type_code' => 'C2', 'account_code' => '265', 'account_name' => 'Dépôts et cautionnements versés',        'normal_balance' => 'debit',  'description' => 'Garanties payées à des tiers (baux, contrats)'],
            ['type_code' => 'C2', 'account_code' => '271', 'account_name' => 'Créances rattachées à des participations', 'normal_balance' => 'debit', 'description' => 'Prêts aux filiales et sociétés liées'],
            ['type_code' => 'C2', 'account_code' => '272', 'account_name' => 'Prêts au personnel',                     'normal_balance' => 'debit',  'description' => 'Avances remboursables accordées aux salariés'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 3 — STOCKS
            // type_code = C3
            // ═══════════════════════════════════════════════════════════════

            ['type_code' => 'C3', 'account_code' => '31',  'account_name' => 'Marchandises',                           'normal_balance' => 'debit',  'description' => 'Biens achetés pour être revendus en l\'état'],
            ['type_code' => 'C3', 'account_code' => '321', 'account_name' => 'Matières premières',                     'normal_balance' => 'debit',  'description' => 'Matières entrant dans la fabrication'],
            ['type_code' => 'C3', 'account_code' => '322', 'account_name' => 'Fournitures liées à la production',      'normal_balance' => 'debit',  'description' => 'Consommables utilisés dans la production'],
            ['type_code' => 'C3', 'account_code' => '33',  'account_name' => 'En-cours de production de biens',        'normal_balance' => 'debit',  'description' => 'Produits en cours de fabrication'],
            ['type_code' => 'C3', 'account_code' => '34',  'account_name' => 'En-cours de production de services',     'normal_balance' => 'debit',  'description' => 'Services en cours de réalisation'],
            ['type_code' => 'C3', 'account_code' => '35',  'account_name' => 'Produits finis',                         'normal_balance' => 'debit',  'description' => 'Produits fabriqués et destinés à la vente'],
            ['type_code' => 'C3', 'account_code' => '36',  'account_name' => 'Produits intermédiaires et résiduels',   'normal_balance' => 'debit',  'description' => 'Produits semi-finis et sous-produits'],
            ['type_code' => 'C3', 'account_code' => '37',  'account_name' => 'Stocks en cours de route',               'normal_balance' => 'debit',  'description' => 'Stocks en transit ou chez des tiers'],
            ['type_code' => 'C3', 'account_code' => '39',  'account_name' => 'Dépréciations des stocks',               'normal_balance' => 'credit', 'description' => 'Provisions pour dépréciation des stocks'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 4 — TIERS (CRÉANCES ET DETTES À COURT TERME)
            // type_code = C4
            // ═══════════════════════════════════════════════════════════════

            // Fournisseurs
            ['type_code' => 'C4', 'account_code' => '401', 'account_name' => 'Fournisseurs',                           'normal_balance' => 'credit', 'description' => 'Dettes envers les fournisseurs de biens et services'],
            ['type_code' => 'C4', 'account_code' => '402', 'account_name' => 'Fournisseurs — effets à payer',          'normal_balance' => 'credit', 'description' => 'Traites et effets de commerce à payer'],
            ['type_code' => 'C4', 'account_code' => '408', 'account_name' => 'Fournisseurs — factures non parvenues',  'normal_balance' => 'credit', 'description' => 'Charges à payer sur achats en attente de facture'],
            ['type_code' => 'C4', 'account_code' => '409', 'account_name' => 'Fournisseurs débiteurs',                 'normal_balance' => 'debit',  'description' => 'Avances et acomptes versés aux fournisseurs'],

            // Clients
            ['type_code' => 'C4', 'account_code' => '411', 'account_name' => 'Clients',                                'normal_balance' => 'debit',  'description' => 'Créances sur les clients'],
            ['type_code' => 'C4', 'account_code' => '412', 'account_name' => 'Clients — effets à recevoir',            'normal_balance' => 'debit',  'description' => 'Traites et effets de commerce à recevoir'],
            ['type_code' => 'C4', 'account_code' => '418', 'account_name' => 'Clients — produits à recevoir',          'normal_balance' => 'debit',  'description' => 'Produits à recevoir sur ventes en attente de facturation'],
            ['type_code' => 'C4', 'account_code' => '419', 'account_name' => 'Clients créditeurs',                     'normal_balance' => 'credit', 'description' => 'Avances et acomptes reçus des clients'],

            // Personnel
            ['type_code' => 'C4', 'account_code' => '421', 'account_name' => 'Personnel — rémunérations dues',         'normal_balance' => 'credit', 'description' => 'Salaires et traitements à payer'],
            ['type_code' => 'C4', 'account_code' => '422', 'account_name' => 'Personnel — acomptes et avances',        'normal_balance' => 'debit',  'description' => 'Avances sur salaires accordées'],
            ['type_code' => 'C4', 'account_code' => '423', 'account_name' => 'Personnel — oppositions',                'normal_balance' => 'credit', 'description' => 'Saisies sur salaires'],
            ['type_code' => 'C4', 'account_code' => '424', 'account_name' => 'Personnel — œuvres sociales internes',   'normal_balance' => 'credit', 'description' => 'Comité d\'entreprise, mutuelles'],
            ['type_code' => 'C4', 'account_code' => '425', 'account_name' => 'Personnel — dépôts',                     'normal_balance' => 'credit', 'description' => 'Cautions et dépôts reçus du personnel'],

            // Organismes sociaux
            ['type_code' => 'C4', 'account_code' => '431', 'account_name' => 'Sécurité sociale et organismes sociaux', 'normal_balance' => 'credit', 'description' => 'Cotisations patronales et salariales à verser'],
            ['type_code' => 'C4', 'account_code' => '432', 'account_name' => 'Mutuelles',                              'normal_balance' => 'credit', 'description' => 'Cotisations mutuelles à régler'],

            // État et collectivités
            ['type_code' => 'C4', 'account_code' => '441', 'account_name' => 'État — impôts et taxes à payer',         'normal_balance' => 'credit', 'description' => 'IS, patente et autres impôts directs'],
            ['type_code' => 'C4', 'account_code' => '442', 'account_name' => 'État — TVA facturée (collectée)',        'normal_balance' => 'credit', 'description' => 'TVA sur ventes à reverser au Trésor'],
            ['type_code' => 'C4', 'account_code' => '443', 'account_name' => 'État — TVA récupérable (déductible)',    'normal_balance' => 'debit',  'description' => 'TVA sur achats récupérable'],
            ['type_code' => 'C4', 'account_code' => '444', 'account_name' => 'État — TVA due ou crédit de TVA',        'normal_balance' => 'credit', 'description' => 'Solde net TVA collectée - TVA déductible'],
            ['type_code' => 'C4', 'account_code' => '445', 'account_name' => 'État — subventions à recevoir',          'normal_balance' => 'debit',  'description' => 'Subventions d\'exploitation accordées non encore reçues'],
            ['type_code' => 'C4', 'account_code' => '447', 'account_name' => 'État — impôts retenus à la source',      'normal_balance' => 'credit', 'description' => 'Retenues à la source sur rémunérations'],
            ['type_code' => 'C4', 'account_code' => '449', 'account_name' => 'État — créances fiscales',               'normal_balance' => 'debit',  'description' => 'Crédit d\'impôt et trop-versé à récupérer'],

            // Associés
            ['type_code' => 'C4', 'account_code' => '451', 'account_name' => 'Associés — comptes courants',            'normal_balance' => 'credit', 'description' => 'Avances des associés (non bloquées)'],
            ['type_code' => 'C4', 'account_code' => '452', 'account_name' => 'Associés — dividendes à payer',          'normal_balance' => 'credit', 'description' => 'Dividendes votés en attente de versement'],

            // Débiteurs et créditeurs divers
            ['type_code' => 'C4', 'account_code' => '471', 'account_name' => 'Débiteurs divers',                       'normal_balance' => 'debit',  'description' => 'Autres créances diverses'],
            ['type_code' => 'C4', 'account_code' => '472', 'account_name' => 'Créditeurs divers',                      'normal_balance' => 'credit', 'description' => 'Autres dettes diverses'],
            ['type_code' => 'C4', 'account_code' => '476', 'account_name' => 'Charges constatées d\'avance',           'normal_balance' => 'debit',  'description' => 'Charges payées rattachables à l\'exercice suivant'],
            ['type_code' => 'C4', 'account_code' => '477', 'account_name' => 'Produits constatés d\'avance',           'normal_balance' => 'credit', 'description' => 'Produits encaissés mais rattachables à l\'exercice suivant'],
            ['type_code' => 'C4', 'account_code' => '478', 'account_name' => 'Écarts de conversion — Actif',           'normal_balance' => 'debit',  'description' => 'Pertes de change latentes (non réalisées) sur créances/dettes'],
            ['type_code' => 'C4', 'account_code' => '479', 'account_name' => 'Écarts de conversion — Passif',          'normal_balance' => 'credit', 'description' => 'Gains de change latents (non réalisés) sur créances/dettes'],

            // Compte de l'exploitant (Entreprises individuelles)
            ['type_code' => 'C4', 'account_code' => '485', 'account_name' => 'Compte de l\'exploitant',                'normal_balance' => 'debit',  'description' => 'Apports et retraits personnels de l\'exploitant individuel'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 5 — TRÉSORERIE
            // type_code = C5
            // ═══════════════════════════════════════════════════════════════

            ['type_code' => 'C5', 'account_code' => '511', 'account_name' => 'Valeurs à l\'encaissement',              'normal_balance' => 'debit',  'description' => 'Chèques et effets remis à l\'encaissement, en attente'],
            ['type_code' => 'C5', 'account_code' => '512', 'account_name' => 'Valeurs en cours de règlement',          'normal_balance' => 'debit',  'description' => 'Virements en attente de confirmation'],
            ['type_code' => 'C5', 'account_code' => '521', 'account_name' => 'Banques locales',                        'normal_balance' => 'debit',  'description' => 'Comptes bancaires courants ouverts localement'],
            ['type_code' => 'C5', 'account_code' => '522', 'account_name' => 'Banques — crédits de campagne',          'normal_balance' => 'credit', 'description' => 'Lignes de crédit à court terme (découverts autorisés)'],
            ['type_code' => 'C5', 'account_code' => '523', 'account_name' => 'Banques — crédits d\'escompte',          'normal_balance' => 'credit', 'description' => 'Effets escomptés non échus'],
            ['type_code' => 'C5', 'account_code' => '531', 'account_name' => 'Chèques postaux (CCP)',                  'normal_balance' => 'debit',  'description' => 'Comptes courants postaux'],
            ['type_code' => 'C5', 'account_code' => '532', 'account_name' => 'Mobile Money',                           'normal_balance' => 'debit',  'description' => 'Soldes Orange Money, Wave, MTN MoMo et équivalents'],
            ['type_code' => 'C5', 'account_code' => '541', 'account_name' => 'Trésor public',                          'normal_balance' => 'debit',  'description' => 'Dépôts auprès du Trésor (entités publiques)'],
            ['type_code' => 'C5', 'account_code' => '571', 'account_name' => 'Caisse siège social',                    'normal_balance' => 'debit',  'description' => 'Espèces en caisse au siège'],
            ['type_code' => 'C5', 'account_code' => '572', 'account_name' => 'Caisse succursales',                     'normal_balance' => 'debit',  'description' => 'Espèces en caisse dans les agences'],
            ['type_code' => 'C5', 'account_code' => '581', 'account_name' => 'Virements internes',                     'normal_balance' => 'debit',  'description' => 'Compte de liaison lors de transferts entre caisses / banques'],
            ['type_code' => 'C5', 'account_code' => '590', 'account_name' => 'Dépréciations des valeurs de placement', 'normal_balance' => 'credit', 'description' => 'Provisions pour dépréciation des titres de placement'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 6 — CHARGES DES ACTIVITÉS ORDINAIRES (AO)
            // type_code = C6
            // ═══════════════════════════════════════════════════════════════

            // Achats
            ['type_code' => 'C6', 'account_code' => '601', 'account_name' => 'Achats de marchandises',                 'normal_balance' => 'debit',  'description' => 'Achats de biens destinés à la revente'],
            ['type_code' => 'C6', 'account_code' => '602', 'account_name' => 'Achats de matières premières',           'normal_balance' => 'debit',  'description' => 'Matières premières entrant dans la fabrication'],
            ['type_code' => 'C6', 'account_code' => '604', 'account_name' => 'Achats stockés de matières consommables', 'normal_balance' => 'debit', 'description' => 'Fournitures et matières consommables stockées'],
            ['type_code' => 'C6', 'account_code' => '605', 'account_name' => 'Autres achats',                          'normal_balance' => 'debit',  'description' => 'Achats non stockés et fournitures'],
            ['type_code' => 'C6', 'account_code' => '608', 'account_name' => 'Achats — réductions obtenues',           'normal_balance' => 'credit', 'description' => 'Remises, rabais, ristournes sur achats'],

            // Transports
            ['type_code' => 'C6', 'account_code' => '61',  'account_name' => 'Transports',                             'normal_balance' => 'debit',  'description' => 'Frais de transport sur achats, ventes et déplacements'],

            // Services extérieurs A (y compris Personnel extérieur)
            ['type_code' => 'C6', 'account_code' => '621', 'account_name' => 'Personnel extérieur',                    'normal_balance' => 'debit',  'description' => 'Intérimaires et personnel prêté par une autre entreprise'],
            ['type_code' => 'C6', 'account_code' => '622', 'account_name' => 'Locations et charges locatives',         'normal_balance' => 'debit',  'description' => 'Loyers de locaux, matériels et crédit-bail'],
            ['type_code' => 'C6', 'account_code' => '623', 'account_name' => 'Redevances de crédit-bail',              'normal_balance' => 'debit',  'description' => 'Loyers de crédit-bail mobilier et immobilier'],
            ['type_code' => 'C6', 'account_code' => '624', 'account_name' => 'Entretien, réparations et maintenance',  'normal_balance' => 'debit',  'description' => 'Frais de maintenance et réparation des biens'],
            ['type_code' => 'C6', 'account_code' => '625', 'account_name' => 'Primes d\'assurance',                    'normal_balance' => 'debit',  'description' => 'Cotisations d\'assurance tous risques'],
            ['type_code' => 'C6', 'account_code' => '626', 'account_name' => 'Études, recherches et documentation',    'normal_balance' => 'debit',  'description' => 'Frais d\'études, d\'expertise et de documentation'],
            ['type_code' => 'C6', 'account_code' => '627', 'account_name' => 'Publicité, publications et relations publiques', 'normal_balance' => 'debit', 'description' => 'Marketing, publicité et communication'],
            ['type_code' => 'C6', 'account_code' => '628', 'account_name' => 'Frais de téléphonie et de télécommunications', 'normal_balance' => 'debit', 'description' => 'Internet, téléphone, messagerie'],

            // Services extérieurs B
            ['type_code' => 'C6', 'account_code' => '631', 'account_name' => 'Frais bancaires',                        'normal_balance' => 'debit',  'description' => 'Commissions, agios et frais de tenue de compte'],
            ['type_code' => 'C6', 'account_code' => '632', 'account_name' => 'Rémunérations d\'intermédiaires et honoraires', 'normal_balance' => 'debit', 'description' => 'Honoraires avocats, experts-comptables, consultants'],
            ['type_code' => 'C6', 'account_code' => '633', 'account_name' => 'Frais de formation du personnel',        'normal_balance' => 'debit',  'description' => 'Formations professionnelles des salariés'],
            ['type_code' => 'C6', 'account_code' => '634', 'account_name' => 'Cadeaux à la clientèle',                 'normal_balance' => 'debit',  'description' => 'Cadeaux offerts aux clients (limités fiscalement)'],
            ['type_code' => 'C6', 'account_code' => '635', 'account_name' => 'Frais de voyage et de déplacement',      'normal_balance' => 'debit',  'description' => 'Billets, hôtels, per diem des déplacements professionnels'],
            ['type_code' => 'C6', 'account_code' => '636', 'account_name' => 'Frais de mission',                       'normal_balance' => 'debit',  'description' => 'Indemnités de mission et frais de représentation'],

            // Impôts et taxes
            ['type_code' => 'C6', 'account_code' => '641', 'account_name' => 'Impôts et taxes directs',                'normal_balance' => 'debit',  'description' => 'Patente, taxe foncière, taxe professionnelle'],
            ['type_code' => 'C6', 'account_code' => '642', 'account_name' => 'Droits de douane',                       'normal_balance' => 'debit',  'description' => 'Droits à l\'importation et à l\'exportation'],
            ['type_code' => 'C6', 'account_code' => '643', 'account_name' => 'Taxes sur le chiffre d\'affaires',       'normal_balance' => 'debit',  'description' => 'TVA non récupérable, autres taxes sur CA'],
            ['type_code' => 'C6', 'account_code' => '645', 'account_name' => 'Autres impôts et taxes',                 'normal_balance' => 'debit',  'description' => 'Taxes diverses non classées ailleurs'],

            // Autres charges
            ['type_code' => 'C6', 'account_code' => '651', 'account_name' => 'Pertes sur créances irrécouvrables',     'normal_balance' => 'debit',  'description' => 'Créances définitivement perdues'],
            ['type_code' => 'C6', 'account_code' => '658', 'account_name' => 'Charges diverses',                       'normal_balance' => 'debit',  'description' => 'Autres charges d\'exploitation non classées'],

            // Charges de personnel
            ['type_code' => 'C6', 'account_code' => '661', 'account_name' => 'Rémunérations directes versées au personnel', 'normal_balance' => 'debit', 'description' => 'Salaires bruts, indemnités et primes'],
            ['type_code' => 'C6', 'account_code' => '662', 'account_name' => 'Rémunérations directes versées aux associés', 'normal_balance' => 'debit', 'description' => 'Salaires versés aux associés gérants'],
            ['type_code' => 'C6', 'account_code' => '663', 'account_name' => 'Indemnités forfaitaires versées au personnel', 'normal_balance' => 'debit', 'description' => 'Per diem, indemnités de licenciement, etc.'],
            ['type_code' => 'C6', 'account_code' => '664', 'account_name' => 'Charges sociales patronales',             'normal_balance' => 'debit',  'description' => 'Cotisations patronales CNPS et autres caisses'],
            ['type_code' => 'C6', 'account_code' => '666', 'account_name' => 'Rémunérations transférées',              'normal_balance' => 'debit',  'description' => 'Refacturation de personnel mis à disposition'],

            // Frais financiers
            ['type_code' => 'C6', 'account_code' => '671', 'account_name' => 'Intérêts des emprunts',                  'normal_balance' => 'debit',  'description' => 'Intérêts sur prêts bancaires et obligations'],
            ['type_code' => 'C6', 'account_code' => '672', 'account_name' => 'Intérêts dans les loyers de crédit-bail', 'normal_balance' => 'debit', 'description' => 'Part financière des loyers de crédit-bail'],
            ['type_code' => 'C6', 'account_code' => '673', 'account_name' => 'Escomptes accordés',                     'normal_balance' => 'debit',  'description' => 'Réductions financières accordées aux clients'],
            ['type_code' => 'C6', 'account_code' => '674', 'account_name' => 'Pertes sur créances liées à des participations', 'normal_balance' => 'debit', 'description' => 'Pertes sur filiales et sociétés liées'],
            ['type_code' => 'C6', 'account_code' => '678', 'account_name' => 'Autres charges financières',             'normal_balance' => 'debit',  'description' => 'Pertes de change et autres charges financières'],

            // Dotations aux amortissements et provisions
            ['type_code' => 'C6', 'account_code' => '681', 'account_name' => 'Dotations aux amortissements — immobilisations incorporelles', 'normal_balance' => 'debit', 'description' => 'Amortissement annuel des actifs incorporels'],
            ['type_code' => 'C6', 'account_code' => '682', 'account_name' => 'Dotations aux amortissements — immobilisations corporelles', 'normal_balance' => 'debit', 'description' => 'Amortissement annuel des actifs corporels'],
            ['type_code' => 'C6', 'account_code' => '691', 'account_name' => 'Dotations aux provisions pour risques et charges', 'normal_balance' => 'debit', 'description' => 'Provisions pour litiges, garanties, restructuration'],
            ['type_code' => 'C6', 'account_code' => '697', 'account_name' => 'Dotations aux provisions pour dépréciations des stocks', 'normal_balance' => 'debit', 'description' => 'Provisions pour stocks obsolètes ou dépréciés'],
            ['type_code' => 'C6', 'account_code' => '698', 'account_name' => 'Dotations aux provisions pour dépréciations des créances', 'normal_balance' => 'debit', 'description' => 'Provisions pour créances douteuses'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 7 — PRODUITS DES ACTIVITÉS ORDINAIRES (AO)
            // type_code = C7
            // ═══════════════════════════════════════════════════════════════

            // Ventes
            ['type_code' => 'C7', 'account_code' => '701', 'account_name' => 'Ventes de marchandises',                 'normal_balance' => 'credit', 'description' => 'Chiffre d\'affaires sur revente de marchandises en l\'état'],
            ['type_code' => 'C7', 'account_code' => '702', 'account_name' => 'Ventes de produits finis',               'normal_balance' => 'credit', 'description' => 'Chiffre d\'affaires sur produits fabriqués'],
            ['type_code' => 'C7', 'account_code' => '703', 'account_name' => 'Ventes de produits intermédiaires',      'normal_balance' => 'credit', 'description' => 'Ventes de semi-produits'],
            ['type_code' => 'C7', 'account_code' => '704', 'account_name' => 'Ventes de produits résiduels',           'normal_balance' => 'credit', 'description' => 'Ventes de sous-produits et déchets'],
            ['type_code' => 'C7', 'account_code' => '705', 'account_name' => 'Travaux facturés',                       'normal_balance' => 'credit', 'description' => 'Chiffre d\'affaires sur travaux de construction ou réparation'],
            ['type_code' => 'C7', 'account_code' => '706', 'account_name' => 'Services vendus',                        'normal_balance' => 'credit', 'description' => 'Prestations de services facturées aux clients'],
            ['type_code' => 'C7', 'account_code' => '707', 'account_name' => 'Produits accessoires',                   'normal_balance' => 'credit', 'description' => 'Revenus accessoires (locations, commissions perçues…)'],
            ['type_code' => 'C7', 'account_code' => '708', 'account_name' => 'Produits des activités annexes',         'normal_balance' => 'credit', 'description' => 'Produits divers liés à l\'activité principale'],

            // Production stockée et immobilisée
            ['type_code' => 'C7', 'account_code' => '71',  'account_name' => 'Production stockée (ou déstockage)',     'normal_balance' => 'credit', 'description' => 'Variation des stocks de produits finis et en-cours'],
            ['type_code' => 'C7', 'account_code' => '72',  'account_name' => 'Production immobilisée',                 'normal_balance' => 'credit', 'description' => 'Travaux réalisés par l\'entreprise pour elle-même'],

            // Subventions et transferts
            ['type_code' => 'C7', 'account_code' => '73',  'account_name' => 'Variations des stocks de marchandises',  'normal_balance' => 'credit', 'description' => 'Ajustement du stock de marchandises (variation)'],
            ['type_code' => 'C7', 'account_code' => '742', 'account_name' => 'Subventions d\'exploitation',            'normal_balance' => 'credit', 'description' => 'Aides de l\'État compensant des charges d\'exploitation'],
            ['type_code' => 'C7', 'account_code' => '744', 'account_name' => 'Subventions d\'équilibre',               'normal_balance' => 'credit', 'description' => 'Subventions destinées à combler un déficit d\'exploitation'],

            // Autres produits
            ['type_code' => 'C7', 'account_code' => '751', 'account_name' => 'Redevances pour concessions, brevets',   'normal_balance' => 'credit', 'description' => 'Royalties et licences perçues'],
            ['type_code' => 'C7', 'account_code' => '752', 'account_name' => 'Revenus des immeubles non affectés aux activités professionnelles', 'normal_balance' => 'credit', 'description' => 'Loyers perçus sur biens hors exploitation'],
            ['type_code' => 'C7', 'account_code' => '758', 'account_name' => 'Produits divers',                        'normal_balance' => 'credit', 'description' => 'Autres produits d\'exploitation non classés ailleurs'],

            // Produits financiers
            ['type_code' => 'C7', 'account_code' => '771', 'account_name' => 'Intérêts de prêts',                      'normal_balance' => 'credit', 'description' => 'Intérêts perçus sur prêts accordés'],
            ['type_code' => 'C7', 'account_code' => '772', 'account_name' => 'Produits sur cessions de valeurs mobilières', 'normal_balance' => 'credit', 'description' => 'Plus-values sur cession de titres de placement'],
            ['type_code' => 'C7', 'account_code' => '773', 'account_name' => 'Escomptes obtenus',                      'normal_balance' => 'credit', 'description' => 'Réductions financières obtenues des fournisseurs'],
            ['type_code' => 'C7', 'account_code' => '776', 'account_name' => 'Gains de change',                        'normal_balance' => 'credit', 'description' => 'Gains réalisés sur opérations en devises étrangères'],
            ['type_code' => 'C7', 'account_code' => '778', 'account_name' => 'Autres revenus financiers',              'normal_balance' => 'credit', 'description' => 'Dividendes reçus et autres revenus financiers'],

            // Reprises de provisions
            ['type_code' => 'C7', 'account_code' => '791', 'account_name' => 'Reprises de provisions pour risques et charges', 'normal_balance' => 'credit', 'description' => 'Annulation ou diminution des provisions'],
            ['type_code' => 'C7', 'account_code' => '797', 'account_name' => 'Reprises de provisions pour dépréciations', 'normal_balance' => 'credit', 'description' => 'Reprises sur dépréciations de stocks et créances'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 8 — COMPTES HAO ET RÉSULTAT
            // type_code = C8
            // ═══════════════════════════════════════════════════════════════

            ['type_code' => 'C8', 'account_code' => '81',  'account_name' => 'Valeurs comptables des cessions d\'immobilisations', 'normal_balance' => 'debit', 'description' => 'Coût net comptable des immobilisations cédées'],
            ['type_code' => 'C8', 'account_code' => '82',  'account_name' => 'Produits des cessions d\'immobilisations', 'normal_balance' => 'credit', 'description' => 'Prix de vente des immobilisations cédées'],
            ['type_code' => 'C8', 'account_code' => '83',  'account_name' => 'Charges HAO diverses',                    'normal_balance' => 'debit',  'description' => 'Charges exceptionnelles hors activités ordinaires'],
            ['type_code' => 'C8', 'account_code' => '84',  'account_name' => 'Produits HAO divers',                     'normal_balance' => 'credit', 'description' => 'Produits exceptionnels hors activités ordinaires'],
            ['type_code' => 'C8', 'account_code' => '85',  'account_name' => 'Dotations HAO',                           'normal_balance' => 'debit',  'description' => 'Amortissements et provisions à caractère exceptionnel'],
            ['type_code' => 'C8', 'account_code' => '86',  'account_name' => 'Reprises HAO',                            'normal_balance' => 'credit', 'description' => 'Reprises sur provisions et amortissements HAO'],
            ['type_code' => 'C8', 'account_code' => '87',  'account_name' => 'Participation des travailleurs',          'normal_balance' => 'debit',  'description' => 'Quote-part du résultat distribuée aux salariés (si légale)'],
            ['type_code' => 'C8', 'account_code' => '88',  'account_name' => 'Subventions d\'équilibre versées',        'normal_balance' => 'debit',  'description' => 'Subventions versées à des organismes liés'],
            ['type_code' => 'C8', 'account_code' => '89',  'account_name' => 'Impôt sur le résultat (IS)',              'normal_balance' => 'debit',  'description' => 'Impôt sur les bénéfices des sociétés de l\'exercice'],

            // ═══════════════════════════════════════════════════════════════
            // CLASSE 9 — COMPTABILITÉ ANALYTIQUE DE GESTION
            // type_code = C9
            // ═══════════════════════════════════════════════════════════════

            ['type_code' => 'C9', 'account_code' => '90',  'account_name' => 'Comptes de reclassement et de liaison',   'normal_balance' => 'debit',  'description' => 'Liaison entre la comptabilité générale et analytique'],
            ['type_code' => 'C9', 'account_code' => '92',  'account_name' => 'Centres d\'analyse (ou sections)',        'normal_balance' => 'debit',  'description' => 'Regroupement des charges indirectes par centre de coût'],
            ['type_code' => 'C9', 'account_code' => '93',  'account_name' => 'Coûts des produits ou projets',           'normal_balance' => 'debit',  'description' => 'Accumulation des coûts par produit, projet ou commande'],
            ['type_code' => 'C9', 'account_code' => '94',  'account_name' => 'Stocks analytiques',                      'normal_balance' => 'debit',  'description' => 'Suivi permanent des stocks en comptabilité analytique'],
            ['type_code' => 'C9', 'account_code' => '98',  'account_name' => 'Résultats analytiques',                   'normal_balance' => 'credit', 'description' => 'Résultats calculés par produit ou par projet'],
        ];

        foreach ($accounts as $account) {
            $typeCode = $account['type_code'];
            unset($account['type_code']);

            if (isset($accountTypes[$typeCode])) {
                $account['account_type_id']  = $accountTypes[$typeCode]->id;
                $account['is_system_account'] = 1;
                $account['creator_id']        = $company_id;
                $account['created_by']        = $company_id;
                ChartOfAccount::create($account);
            }
        }
    }
}
