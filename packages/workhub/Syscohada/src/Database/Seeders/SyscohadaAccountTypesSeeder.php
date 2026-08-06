<?php

namespace Workhub\Syscohada\Database\Seeders;

use Illuminate\Database\Seeder;
use Workhub\Account\Models\AccountCategory;
use Workhub\Account\Models\AccountType;

/**
 * Crée les types de comptes correspondant aux 8 classes SYSCOHADA.
 * Chaque type est rattaché à une catégorie créée par SyscohadaAccountCategoriesSeeder.
 */
class SyscohadaAccountTypesSeeder extends Seeder
{
    public function run(int $company_id): void
    {
        // Éviter les doublons si déjà seedé
        $exist = AccountType::where('created_by', $company_id)
            ->where('code', 'C1')
            ->first();

        if ($exist) {
            $this->command?->line("     Types de comptes SYSCOHADA déjà présents pour l'entreprise #{$company_id}. Ignoré.");
            return;
        }

        // Supprimer les types génériques existants
        AccountType::where('created_by', $company_id)->delete();

        $categories = AccountCategory::where('created_by', $company_id)
            ->get()
            ->keyBy('code');

        if ($categories->isEmpty()) {
            $this->command?->error("     Aucune catégorie trouvée pour l'entreprise #{$company_id}. Lancez d'abord SyscohadaAccountCategoriesSeeder.");
            return;
        }

        $types = [
            // ── Classe 1 ──
            [
                'category_code' => 'SYSCOHADA',
                'name'          => 'Classe 1 — Ressources durables',
                'code'          => 'C1',
                'normal_balance'=> 'credit',
                'description'   => 'Capitaux propres, emprunts et dettes financières à long terme',
            ],
            // ── Classe 2 ──
            [
                'category_code' => 'IMMOB',
                'name'          => 'Classe 2 — Actif immobilisé',
                'code'          => 'C2',
                'normal_balance'=> 'debit',
                'description'   => 'Immobilisations incorporelles, corporelles et financières',
            ],
            // ── Classe 3 ──
            [
                'category_code' => 'CIRC',
                'name'          => 'Classe 3 — Stocks',
                'code'          => 'C3',
                'normal_balance'=> 'debit',
                'description'   => 'Stocks de marchandises, matières premières, produits finis',
            ],
            // ── Classe 4 ──
            [
                'category_code' => 'CIRC',
                'name'          => 'Classe 4 — Tiers',
                'code'          => 'C4',
                'normal_balance'=> 'debit',
                'description'   => 'Créances et dettes envers les tiers (fournisseurs, clients, État, personnel)',
            ],
            // ── Classe 5 ──
            [
                'category_code' => 'TRES',
                'name'          => 'Classe 5 — Trésorerie',
                'code'          => 'C5',
                'normal_balance'=> 'debit',
                'description'   => 'Banques, CCP, caisses, valeurs à encaisser',
            ],
            // ── Classe 6 (sous-types) ──
            [
                'category_code' => 'CHG',
                'name'          => 'Classe 6 — Charges des AO',
                'code'          => 'C6',
                'normal_balance'=> 'debit',
                'description'   => 'Achats, transports, services extérieurs, charges de personnel, frais financiers',
            ],
            // ── Classe 7 ──
            [
                'category_code' => 'PRD',
                'name'          => 'Classe 7 — Produits des AO',
                'code'          => 'C7',
                'normal_balance'=> 'credit',
                'description'   => 'Ventes, production stockée, subventions d\'exploitation, revenus financiers',
            ],
            // ── Classe 8 ──
            [
                'category_code' => 'RSLT',
                'name'          => 'Classe 8 — Comptes HAO & résultat',
                'code'          => 'C8',
                'normal_balance'=> 'debit',
                'description'   => 'Charges et produits hors activités ordinaires (HAO), impôt sur le résultat',
            ],
            // ── Classe 9 ──
            [
                'category_code' => 'ANAL',
                'name'          => 'Classe 9 — Comptabilité analytique',
                'code'          => 'C9',
                'normal_balance'=> 'debit',
                'description'   => 'Comptes de gestion et d\'analyse des coûts (usage interne exclusif)',
            ],
        ];

        foreach ($types as $type) {
            $catCode = $type['category_code'];
            unset($type['category_code']);

            if (isset($categories[$catCode])) {
                $type['category_id']     = $categories[$catCode]->id;
                $type['is_system_type']  = 1;
                $type['creator_id']      = $company_id;
                $type['created_by']      = $company_id;
                AccountType::create($type);
            }
        }
    }
}
