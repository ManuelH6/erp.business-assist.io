<?php

namespace Workhub\Syscohada\Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Workhub\Account\Models\AccountCategory;

class SyscohadaRolesSeeder extends Seeder
{
    public function run(int $company_id = null): void
    {
        $roleName = 'Commissaire aux comptes';

        // S'assurer que le rôle n'existe pas déjà pour cette entreprise
        if ($company_id) {
            $role = Role::where('name', $roleName)
                        ->where('guard_name', 'web')
                        ->first();

            if (!$role) {
                $role = Role::create([
                    'name' => $roleName,
                    'guard_name' => 'web',
                    'created_by' => $company_id,
                    'label' => $roleName,
                ]);
            }

            // Assigner des permissions de lecture uniquement
            $readPermissions = [
                'manage-account-reports',
                'manage-journal',
                'manage-ledger',
                'manage-trial-balance',
                'manage-balance-sheet',
                'manage-profit-loss',
            ];

            foreach ($readPermissions as $perm) {
                $permission = Permission::where('name', $perm)->first();
                if ($permission && !$role->hasPermissionTo($permission->name)) {
                    $role->givePermissionTo($permission);
                }
            }
        }
    }
}
