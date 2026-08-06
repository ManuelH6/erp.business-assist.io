<?php

namespace Workhub\Syscohada\Database\Seeders;

use Illuminate\Database\Seeder;
use Workhub\Account\Models\AccountCategory;

/**
 * Crée les 5 catégories de comptes SYSCOHADA.
 * Ces catégories regroupent les 8 classes du plan comptable OHADA.
 */
class SyscohadaAccountCategoriesSeeder extends Seeder
{
    public function run(int $company_id): void
    {
        // Éviter les doublons si déjà seedé
        $exist = AccountCategory::where('created_by', $company_id)
            ->where('code', 'SYSCOHADA')
            ->first();

        if ($exist) {
            $this->command?->line("     Catégories SYSCOHADA déjà présentes pour l'entreprise #{$company_id}. Ignoré.");
            return;
        }

        // Supprimer les catégories génériques existantes si elles existent
        AccountCategory::where('created_by', $company_id)->delete();

        $categories = [
            [
                'name'        => 'Ressources durables',
                'code'        => 'SYSCOHADA',   // marqueur pour la vérification ci-dessus
                'type'        => 'equity',
                'description' => 'Classe 1 — Capitaux propres et ressources assimilées, emprunts et dettes financières',
            ],
            [
                'name'        => 'Actif immobilisé',
                'code'        => 'IMMOB',
                'type'        => 'assets',
                'description' => 'Classe 2 — Charges immobilisées et immobilisations incorporelles, corporelles et financières',
            ],
            [
                'name'        => 'Actif circulant',
                'code'        => 'CIRC',
                'type'        => 'assets',
                'description' => 'Classes 3 & 4 — Stocks, créances et emplois assimilés',
            ],
            [
                'name'        => 'Trésorerie',
                'code'        => 'TRES',
                'type'        => 'assets',
                'description' => 'Classe 5 — Valeurs à encaisser, banques et CCP, caisses',
            ],
            [
                'name'        => 'Charges',
                'code'        => 'CHG',
                'type'        => 'expenses',
                'description' => 'Classes 6 & 8 — Charges des activités ordinaires et charges HAO',
            ],
            [
                'name'        => 'Produits',
                'code'        => 'PRD',
                'type'        => 'revenue',
                'description' => 'Classes 7 & 8 — Produits des activités ordinaires et produits HAO',
            ],
            [
                'name'        => 'Comptes de résultat et bilan (usage interne)',
                'code'        => 'RSLT',
                'type'        => 'equity',
                'description' => 'Classe 8 — Comptes des autres charges et des autres produits (HAO)',
            ],
            [
                'name'        => 'Comptabilité Analytique',
                'code'        => 'ANAL',
                'type'        => 'equity', // Les comptes analytiques sont internes
                'description' => 'Classe 9 — Comptabilité analytique de gestion',
            ],
        ];

        foreach ($categories as $cat) {
            $cat['creator_id'] = $company_id;
            $cat['created_by'] = $company_id;
            AccountCategory::create($cat);
        }
    }
}
