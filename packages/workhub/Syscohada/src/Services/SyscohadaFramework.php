<?php

namespace Workhub\Syscohada\Services;

use Workhub\Syscohada\Database\Seeders\SyscohadaAccountCategoriesSeeder;
use Workhub\Syscohada\Database\Seeders\SyscohadaAccountTypesSeeder;
use Workhub\Syscohada\Database\Seeders\SyscohadaChartOfAccountsSeeder;

/**
 * SyscohadaFramework
 *
 * Service principal du module SYSCOHADA.
 * Sert de façade appelée par AccountUtility::defaultdata()
 * lorsque la variable d'environnement ACCOUNTING_FRAMEWORK=syscohada.
 *
 * Usage dans .env :
 *   ACCOUNTING_FRAMEWORK=syscohada
 *
 * Usage dans config/app.php :
 *   'accounting_framework' => env('ACCOUNTING_FRAMEWORK', 'generic'),
 */
class SyscohadaFramework
{
    /**
     * Point d'entrée : initialise le plan comptable SYSCOHADA
     * pour une entreprise donnée.
     *
     * @param  int|null  $company_id
     */
    public static function defaultdata(?int $company_id = null): void
    {
        if (is_null($company_id)) {
            return;
        }

        (new SyscohadaAccountCategoriesSeeder())->run($company_id);
        (new SyscohadaAccountTypesSeeder())->run($company_id);
        (new SyscohadaChartOfAccountsSeeder())->run($company_id);
    }

    /**
     * Retourne le nom lisible du référentiel comptable.
     */
    public static function frameworkName(): string
    {
        return 'SYSCOHADA révisé 2017 (OHADA)';
    }

    /**
     * Retourne la liste des pays membres de l'OHADA (17 États).
     */
    public static function memberCountries(): array
    {
        return [
            'BEN' => 'Bénin',
            'BFA' => 'Burkina Faso',
            'CMR' => 'Cameroun',
            'CAF' => 'République centrafricaine',
            'COM' => 'Comores',
            'COD' => 'République démocratique du Congo',
            'COG' => 'Congo',
            'CIV' => 'Côte d\'Ivoire',
            'GAB' => 'Gabon',
            'GIN' => 'Guinée',
            'GNB' => 'Guinée-Bissau',
            'GNQ' => 'Guinée équatoriale',
            'MLI' => 'Mali',
            'NER' => 'Niger',
            'SEN' => 'Sénégal',
            'TCD' => 'Tchad',
            'TGO' => 'Togo',
        ];
    }

    /**
     * Retourne la liste des classes du plan comptable SYSCOHADA.
     */
    public static function accountClasses(): array
    {
        return [
            1 => 'Ressources durables',
            2 => 'Actif immobilisé',
            3 => 'Stocks',
            4 => 'Tiers (Créances et Dettes à court terme)',
            5 => 'Trésorerie',
            6 => 'Charges des activités ordinaires (AO)',
            7 => 'Produits des activités ordinaires (AO)',
            8 => 'Comptes HAO et Résultat',
        ];
    }

    /**
     * Détermine la classe SYSCOHADA (1–8) d'un code comptable.
     *
     * @param  string  $accountCode
     * @return int|null
     */
    public static function getClass(string $accountCode): ?int
    {
        $firstChar = (int) substr(ltrim($accountCode, '0'), 0, 1);
        return ($firstChar >= 1 && $firstChar <= 8) ? $firstChar : null;
    }

    /**
     * Indique si un compte est débiteur par nature (actif / charge).
     *
     * @param  string  $accountCode
     */
    public static function isDebitNature(string $accountCode): bool
    {
        $class = self::getClass($accountCode);
        // Classes 2, 3, 4 (partiellement), 5, 6 → débit normal
        return in_array($class, [2, 3, 5, 6], true);
    }
}
