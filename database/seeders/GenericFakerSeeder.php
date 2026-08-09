<?php

namespace Database\Seeders;

use App\Models\PurchaseInvoice;
use App\Models\PurchaseInvoiceItem;
use App\Models\SalesInvoice;
use App\Models\SalesInvoiceItem;
use App\Models\SalesProposal;
use App\Models\SalesProposalItem;
use App\Models\User;
use App\Models\Warehouse;
use Illuminate\Database\Seeder;
use Workhub\Account\Models\Customer;
use Workhub\Account\Models\Vendor;
use Workhub\ProductService\Models\ProductServiceItem;

class GenericFakerSeeder extends Seeder
{
    public function run(): void
    {
        $companyUser = User::where('email', 'company@example.com')->first();
        if (! $companyUser) {
            $this->command?->error('Compte entreprise introuvable.');

            return;
        }

        $companyId = $companyUser->id;

        $this->command?->info('Génération dynamique des données de test avec Faker...');

        $customers = Customer::where('created_by', $companyId)->get();
        $vendors = Vendor::where('created_by', $companyId)->get();
        $warehouses = Warehouse::where('created_by', $companyId)->get();
        $products = ProductServiceItem::where('created_by', $companyId)->get();

        $warehouseId = $warehouses->first()?->id;

        // 1. Sales Proposals (Propositions / Devis)
        if ($customers->count() > 0 && $products->count() > 0) {
            $this->command?->info('Injection des propositions commerciales (SalesProposals)...');
            for ($i = 0; $i < 8; $i++) {
                $customer = $customers->random();
                $subtotal = 0;
                $proposalDate = fake()->dateTimeBetween('-4 months', 'now');
                $dueDate = (clone $proposalDate)->modify('+30 days');

                $proposal = SalesProposal::create([
                    'proposal_date' => $proposalDate->format('Y-m-d'),
                    'due_date' => $dueDate->format('Y-m-d'),
                    'customer_id' => $customer->user_id ?? $customer->id,
                    'warehouse_id' => $warehouseId,
                    'payment_terms' => fake()->randomElement(['Net 30', 'Paiement a reception', 'Advance 50%']),
                    'subtotal' => 0,
                    'tax_amount' => 0,
                    'discount_amount' => 0,
                    'total_amount' => 0,
                    'status' => fake()->randomElement(['draft', 'sent', 'accepted', 'declined']),
                    'notes' => fake('en_US')->realText(100),
                    'creator_id' => $companyId,
                    'created_by' => $companyId,
                ]);

                // Item random
                $product = $products->random();
                $qty = fake()->numberBetween(1, 5);
                $price = $product->sale_price ?? fake()->randomFloat(2, 5000, 50000);
                $itemSubtotal = $price * $qty;
                $taxAmount = $itemSubtotal * 0.18; // TVA 18%

                SalesProposalItem::create([
                    'proposal_id' => $proposal->id,
                    'product_id' => $product->id,
                    'quantity' => $qty,
                    'unit_price' => $price,
                    'tax_amount' => $taxAmount,
                    'total_amount' => $itemSubtotal + $taxAmount,
                ]);

                $proposal->update([
                    'subtotal' => $itemSubtotal,
                    'tax_amount' => $taxAmount,
                    'total_amount' => $itemSubtotal + $taxAmount,
                ]);
            }
        }

        // 2. Sales Invoices (Factures de vente)
        if ($customers->count() > 0 && $products->count() > 0) {
            $this->command?->info('Injection des factures de vente (SalesInvoices)...');
            for ($i = 0; $i < 12; $i++) {
                $customer = $customers->random();
                $invDate = fake()->dateTimeBetween('-6 months', 'now');
                $dueDate = (clone $invDate)->modify('+15 days');
                $status = fake()->randomElement(['draft', 'sent', 'paid', 'partially_paid', 'unpaid']);

                $invoice = SalesInvoice::create([
                    'invoice_date' => $invDate->format('Y-m-d'),
                    'due_date' => $dueDate->format('Y-m-d'),
                    'customer_id' => $customer->user_id ?? $customer->id,
                    'warehouse_id' => $warehouseId,
                    'subtotal' => 0,
                    'tax_amount' => 0,
                    'discount_amount' => 0,
                    'total_amount' => 0,
                    'paid_amount' => 0,
                    'balance_amount' => 0,
                    'status' => $status,
                    'type' => 'invoice',
                    'notes' => fake('en_US')->sentence(),
                    'creator_id' => $companyId,
                    'created_by' => $companyId,
                ]);

                $product = $products->random();
                $qty = fake()->numberBetween(1, 10);
                $price = $product->sale_price ?? fake()->randomFloat(2, 10000, 150000);
                $itemSubtotal = $price * $qty;
                $taxAmount = $itemSubtotal * 0.18;
                $total = $itemSubtotal + $taxAmount;

                SalesInvoiceItem::create([
                    'invoice_id' => $invoice->id,
                    'product_id' => $product->id,
                    'quantity' => $qty,
                    'unit_price' => $price,
                    'tax_amount' => $taxAmount,
                    'total_amount' => $total,
                ]);

                $paid = ($status === 'paid') ? $total : (($status === 'partially_paid') ? ($total / 2) : 0);

                $invoice->update([
                    'subtotal' => $itemSubtotal,
                    'tax_amount' => $taxAmount,
                    'total_amount' => $total,
                    'paid_amount' => $paid,
                    'balance_amount' => $total - $paid,
                ]);
            }
        }

        // 3. Purchase Invoices (Factures d'achat)
        if ($vendors->count() > 0 && $products->count() > 0) {
            $this->command?->info("Injection des factures d'achat (PurchaseInvoices)...");
            for ($i = 0; $i < 10; $i++) {
                $vendor = $vendors->random();
                $invDate = fake()->dateTimeBetween('-5 months', 'now');
                $dueDate = (clone $invDate)->modify('+30 days');
                $status = fake()->randomElement(['draft', 'received', 'paid', 'partially_paid']);

                $pInvoice = PurchaseInvoice::create([
                    'invoice_date' => $invDate->format('Y-m-d'),
                    'due_date' => $dueDate->format('Y-m-d'),
                    'vendor_id' => $vendor->user_id ?? $vendor->id,
                    'warehouse_id' => $warehouseId,
                    'subtotal' => 0,
                    'tax_amount' => 0,
                    'discount_amount' => 0,
                    'total_amount' => 0,
                    'paid_amount' => 0,
                    'debit_note_applied' => 0,
                    'balance_amount' => 0,
                    'status' => $status,
                    'notes' => fake('en_US')->realText(80),
                    'creator_id' => $companyId,
                    'created_by' => $companyId,
                ]);

                $product = $products->random();
                $qty = fake()->numberBetween(2, 20);
                $price = $product->purchase_price > 0 ? $product->purchase_price : fake()->randomFloat(2, 8000, 100000);
                $itemSubtotal = $price * $qty;
                $taxAmount = $itemSubtotal * 0.18;
                $total = $itemSubtotal + $taxAmount;

                PurchaseInvoiceItem::create([
                    'invoice_id' => $pInvoice->id,
                    'product_id' => $product->id,
                    'quantity' => $qty,
                    'unit_price' => $price,
                    'tax_amount' => $taxAmount,
                    'total_amount' => $total,
                ]);

                $paid = ($status === 'paid') ? $total : (($status === 'partially_paid') ? ($total / 2) : 0);

                $pInvoice->update([
                    'subtotal' => $itemSubtotal,
                    'tax_amount' => $taxAmount,
                    'total_amount' => $total,
                    'paid_amount' => $paid,
                    'balance_amount' => $total - $paid,
                ]);
            }
        }

        $this->command?->info('Toutes les fausses données complémentaires Faker ont été injectées !');
    }
}
