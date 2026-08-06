<?php

namespace Workhub\Syscohada\Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class SyscohadaDatabaseSeeder extends Seeder
{
    /**
     * Point d'entrée du seeder SYSCOHADA.
     * Appelé via : php artisan package:seed Syscohada
     */
    public function run(): void
    {
        Model::unguard();

        $this->command?->info('🌍 Installation du plan comptable SYSCOHADA révisé 2017...');

        // Récupérer tous les utilisateurs de type "company"
        $companies = User::where('type', 'company')->get();

        if ($companies->isEmpty()) {
            $this->command?->warn('⚠️  Aucune entreprise trouvée. Lancez d\'abord : php artisan db:seed');
            return;
        }

        foreach ($companies as $company) {
            $this->command?->info("   → Installation pour l'entreprise : {$company->name} (ID: {$company->id})");

            (new SyscohadaAccountCategoriesSeeder())->run($company->id);
            (new SyscohadaAccountTypesSeeder())->run($company->id);
            (new SyscohadaChartOfAccountsSeeder())->run($company->id);
            (new SyscohadaRolesSeeder())->run($company->id);
        }

        $this->command?->info('✅ Plan comptable SYSCOHADA installé avec succès !');
    }
}
