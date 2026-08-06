<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Workhub\Account\Models\Customer;
use Workhub\Account\Models\Vendor;
use Workhub\Account\Models\BankAccount;
use Workhub\Account\Models\ChartOfAccount;
use Workhub\ProductService\Models\ProductServiceTax;
use Workhub\ProductService\Models\ProductServiceCategory;
use Workhub\ProductService\Models\ProductServiceItem;
use Workhub\ProductService\Models\ProductServiceUnit;

class BeninDemoDataSeeder extends Seeder
{
    public function run()
    {
        $companyUser = User::where('email', 'company@example.com')->first();
        if (!$companyUser) {
            $this->command?->error("Company user company@example.com not found. Please run core seeders first.");
            return;
        }

        $companyId = $companyUser->id;

        $this->command?->info("🌍 Initialisation des données de démonstration du Bénin pour l'entreprise (ID: {$companyId})...");

        // 1. Seed Beninese Taxes
        $this->command?->info("   → Création des taxes (TVA & AIB Bénin)...");
        $taxes = [
            ['tax_name' => 'TVA 18% (Bénin)', 'rate' => 18.00],
            ['tax_name' => 'AIB 1% (Bénin - Enregistré)', 'rate' => 1.00],
            ['tax_name' => 'AIB 5% (Bénin - Non enregistré)', 'rate' => 5.00],
        ];

        $taxIds = [];
        foreach ($taxes as $tax) {
            $createdTax = ProductServiceTax::firstOrCreate(
                [
                    'tax_name' => $tax['tax_name'],
                    'created_by' => $companyId
                ],
                [
                    'rate' => $tax['rate'],
                    'creator_id' => $companyId,
                ]
            );
            $taxIds[] = $createdTax->id;
        }

        // 2. Seed Beninese Customers
        $this->command?->info("   → Création des clients béninois...");
        $customers = [
            [
                'company_name' => "Société Béninoise de Brasseries (SOBEBRA)",
                'contact_person_name' => 'Jean-Luc Soglo',
                'contact_person_email' => 'contact@sobebra.bj',
                'contact_person_mobile' => '+229 21 30 00 01',
                'tax_number' => 'IFU 3201000012345',
                'billing_address' => [
                    'billing_name' => "SOBEBRA S.A.",
                    'billing_country' => 'Bénin',
                    'billing_state' => 'Littoral',
                    'billing_city' => 'Cotonou',
                    'billing_phone' => '+229 21 30 00 01',
                    'billing_zip' => 'BP 135',
                    'billing_address' => 'Route de la Sobebra, Cotonou'
                ]
            ],
            [
                'company_name' => "Africab Bénin S.A.",
                'contact_person_name' => 'Marc Houessou',
                'contact_person_email' => 'm.houessou@africab.bj',
                'contact_person_mobile' => '+229 97 00 11 22',
                'tax_number' => 'IFU 1201900345678',
                'billing_address' => [
                    'billing_name' => "Africab Bénin",
                    'billing_country' => 'Bénin',
                    'billing_state' => 'Littoral',
                    'billing_city' => 'Cotonou',
                    'billing_phone' => '+229 97 00 11 22',
                    'billing_zip' => '01 BP 450',
                    'billing_address' => 'Avenue Steinmetz, Cotonou'
                ]
            ],
            [
                'company_name' => "Bénin Transit Logistique",
                'contact_person_name' => 'Mariam Alao',
                'contact_person_email' => 'm.alao@benintransit.bj',
                'contact_person_mobile' => '+229 61 22 33 44',
                'tax_number' => 'IFU 0202112345678',
                'billing_address' => [
                    'billing_name' => "Bénin Transit Logistique",
                    'billing_country' => 'Bénin',
                    'billing_state' => 'Atlantique',
                    'billing_city' => 'Calavi',
                    'billing_phone' => '+229 61 22 33 44',
                    'billing_zip' => 'BP 24',
                    'billing_address' => 'Carrefour Akassato, Abomey-Calavi'
                ]
            ]
        ];

        foreach ($customers as $cust) {
            Customer::firstOrCreate(
                [
                    'company_name' => $cust['company_name'],
                    'created_by' => $companyId
                ],
                [
                    'contact_person_name' => $cust['contact_person_name'],
                    'contact_person_email' => $cust['contact_person_email'],
                    'contact_person_mobile' => $cust['contact_person_mobile'],
                    'tax_number' => $cust['tax_number'],
                    'billing_address' => $cust['billing_address'],
                    'shipping_address' => $cust['billing_address'],
                    'same_as_billing' => true,
                    'creator_id' => $companyId,
                ]
            );
        }

        // 3. Seed Beninese Vendors
        $this->command?->info("   → Création des fournisseurs béninois...");
        $vendors = [
            [
                'company_name' => "Société Béninoise d'Énergie Électrique (SBEE)",
                'contact_person_name' => 'Service Client SBEE',
                'contact_person_email' => 'info@sbee.bj',
                'contact_person_mobile' => '+229 21 31 22 22',
                'tax_number' => 'IFU 3200900088888',
                'billing_address' => [
                    'billing_name' => "SBEE",
                    'billing_country' => 'Bénin',
                    'billing_state' => 'Littoral',
                    'billing_city' => 'Cotonou',
                    'billing_phone' => '+229 21 31 22 22',
                    'billing_zip' => '01 BP 123',
                    'billing_address' => 'Avenue Jean-Paul II, Cotonou'
                ]
            ],
            [
                'company_name' => "Société Nationale des Eaux du Bénin (SONEB)",
                'contact_person_name' => 'Support SONEB',
                'contact_person_email' => 'contact@soneb.bj',
                'contact_person_mobile' => '+229 21 31 11 11',
                'tax_number' => 'IFU 3200900099999',
                'billing_address' => [
                    'billing_name' => "SONEB",
                    'billing_country' => 'Bénin',
                    'billing_state' => 'Littoral',
                    'billing_city' => 'Cotonou',
                    'billing_phone' => '+229 21 31 11 11',
                    'billing_zip' => '01 BP 456',
                    'billing_address' => 'Zone Résidentielle, Cotonou'
                ]
            ],
            [
                'company_name' => "MTN Bénin S.A.",
                'contact_person_name' => 'MTN Business',
                'contact_person_email' => 'business@mtn.bj',
                'contact_person_mobile' => '+229 21 36 00 00',
                'tax_number' => 'IFU 3201100055555',
                'billing_address' => [
                    'billing_name' => "MTN Bénin",
                    'billing_country' => 'Bénin',
                    'billing_state' => 'Littoral',
                    'billing_city' => 'Cotonou',
                    'billing_phone' => '+229 21 36 00 00',
                    'billing_zip' => '01 BP 5200',
                    'billing_address' => 'Boulevard de la Marina, Cotonou'
                ]
            ]
        ];

        foreach ($vendors as $vend) {
            Vendor::firstOrCreate(
                [
                    'company_name' => $vend['company_name'],
                    'created_by' => $companyId
                ],
                [
                    'contact_person_name' => $vend['contact_person_name'],
                    'contact_person_email' => $vend['contact_person_email'],
                    'contact_person_mobile' => $vend['contact_person_mobile'],
                    'tax_number' => $vend['tax_number'],
                    'billing_address' => $vend['billing_address'],
                    'shipping_address' => $vend['billing_address'],
                    'same_as_billing' => true,
                    'creator_id' => $companyId,
                ]
            );
        }

        // 4. Seed Beninese Bank Accounts linked to GL Account 521 (Banques locales)
        $this->command?->info("   → Création des comptes bancaires béninois...");
        $glAccount = ChartOfAccount::where('account_code', '521')
            ->where('created_by', $companyId)
            ->first();

        $glAccountId = $glAccount ? $glAccount->id : null;

        if ($glAccountId) {
            $bankAccounts = [
                [
                    'account_name' => 'Compte Courant BOA Bénin',
                    'bank_name' => 'Bank of Africa Bénin',
                    'account_number' => 'BJ0610100100012345678901',
                    'branch_name' => 'Cotonou Gbégamey',
                    'opening_balance' => 5000000.00,
                    'current_balance' => 5000000.00,
                    'iban' => 'BJ56BJ0610100100012345678901',
                    'swift_code' => 'BOAFBJCC',
                ],
                [
                    'account_name' => 'Compte Courant Ecobank Bénin',
                    'bank_name' => 'Ecobank Bénin',
                    'account_number' => 'BJ0620200200023456789012',
                    'branch_name' => 'Ganhi',
                    'opening_balance' => 12500000.00,
                    'current_balance' => 12500000.00,
                    'iban' => 'BJ56BJ0620200200023456789012',
                    'swift_code' => 'ECOBBJCC',
                ]
            ];

            foreach ($bankAccounts as $bank) {
                BankAccount::firstOrCreate(
                    [
                        'account_number' => $bank['account_number'],
                        'created_by' => $companyId
                    ],
                    [
                        'account_name' => $bank['account_name'],
                        'bank_name' => $bank['bank_name'],
                        'branch_name' => $bank['branch_name'],
                        'account_type' => 'checking',
                        'opening_balance' => $bank['opening_balance'],
                        'current_balance' => $bank['current_balance'],
                        'iban' => $bank['iban'],
                        'swift_code' => $bank['swift_code'],
                        'gl_account_id' => $glAccountId,
                        'is_active' => true,
                        'creator_id' => $companyId,
                    ]
                );
            }
        } else {
            $this->command?->warn("   ⚠️ Compte comptable '521' (Banques locales) introuvable. Création des comptes bancaires annulée.");
        }

        // 5. Seed Product Service Units
        $this->command?->info("   → Création des unités de mesure...");
        $unitPce = ProductServiceUnit::firstOrCreate(
            ['unit_name' => 'Pièce', 'created_by' => $companyId],
            ['creator_id' => $companyId]
        );
        $unitHeure = ProductServiceUnit::firstOrCreate(
            ['unit_name' => 'Heure', 'created_by' => $companyId],
            ['creator_id' => $companyId]
        );

        // 6. Seed Product Service Categories
        $this->command?->info("   → Création des catégories de produits & services...");
        $categories = [
            ['name' => 'Marchandises (SYSCOHADA)', 'color' => '#3498db'],
            ['name' => 'Prestations de Services (SYSCOHADA)', 'color' => '#2ecc71'],
        ];

        $categoryIds = [];
        foreach ($categories as $cat) {
            $createdCat = ProductServiceCategory::firstOrCreate(
                [
                    'name' => $cat['name'],
                    'created_by' => $companyId
                ],
                [
                    'color' => $cat['color'],
                    'creator_id' => $companyId,
                ]
            );
            $categoryIds[] = $createdCat->id;
        }

        // 7. Seed Product Service Items (with TVA 18%)
        $this->command?->info("   → Création des produits & services...");
        if (!empty($categoryIds) && !empty($taxIds)) {
            $items = [
                [
                    'name' => 'Ordinateur Portable Dell Latitude',
                    'sku' => 'DELL-LAT-001',
                    'tax_ids' => [$taxIds[0]], // TVA 18%
                    'category_id' => $categoryIds[0], // Marchandises
                    'description' => 'Ordinateur portable professionnel Intel Core i5, 16GB RAM, 512GB SSD.',
                    'sale_price' => 450000.00,
                    'purchase_price' => 350000.00,
                    'unit' => (string) $unitPce->id,
                    'type' => 'product'
                ],
                [
                    'name' => 'Audit & Consulting Comptable SYSCOHADA',
                    'sku' => 'AUD-SYS-01',
                    'tax_ids' => [$taxIds[0]], // TVA 18%
                    'category_id' => $categoryIds[1], // Services
                    'description' => 'Prestation d\'audit comptable de fin d\'exercice conforme aux normes SYSCOHADA.',
                    'sale_price' => 150000.00,
                    'purchase_price' => 0.00,
                    'unit' => (string) $unitHeure->id,
                    'type' => 'service'
                ]
            ];

            foreach ($items as $item) {
                ProductServiceItem::firstOrCreate(
                    [
                        'sku' => $item['sku'],
                        'created_by' => $companyId
                    ],
                    [
                        'name' => $item['name'],
                        'tax_ids' => $item['tax_ids'],
                        'category_id' => $item['category_id'],
                        'description' => $item['description'],
                        'sale_price' => $item['sale_price'],
                        'purchase_price' => $item['purchase_price'],
                        'unit' => $item['unit'],
                        'type' => $item['type'],
                        'is_active' => true,
                        'creator_id' => $companyId,
                    ]
                );
            }
        }

        $this->command?->info("✅ Données de démonstration du Bénin installées avec succès !");
    }
}
