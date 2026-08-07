<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        (new PermissionRoleSeeder())->run();
        (new DefultSetting())->run();
        (new PlanSeeder())->run();
        (new EmailTemplatesSeeder())->run();
        (new NotificationsTableSeeder())->run();

        $userId = User::where('email', 'company@example.com')->first()->id;
        User::CompanySetting($userId);
        
        // Initialize modules and assign plan to company
        (new PackageSeeder())->run($userId);

        if(config('app.run_demo_seeder'))
        {
            // // Pass $userId to your custom seeder


            (new CouponSeeder())->run();
            (new DemoUserSeeder())->run();

            (new DemoStaffSeeder())->run($userId);
            (new DemoLoginHistorySeeder())->run($userId);
            (new DemoWarehouseSeeder())->run($userId);
            (new HelpdeskCategorySeeder())->run();
            (new HelpdeskTicketSeeder())->run($userId);
            (new HelpdeskReplySeeder())->run($userId);
            (new DemoOrderSeeder())->run($userId);
            (new DemoCouponSeeder())->run($userId);
            (new DemoBankTransferSeeder())->run($userId);
            (new DemoCouponDetailsSeeder())->run($userId);
            (new MessengerSeeder())->run();

            // in this seeder product
            (new DemoTransferSeeder())->run($userId);

            // Données spécifiques Bénin (Clients, Fournisseurs, TVA/AIB, Comptes bancaires, etc.)
            (new BeninDemoDataSeeder())->run();

            // Appel dynamique de l'ensemble des Seeders des 29 modules Workhub
            (new \Workhub\Account\Database\Seeders\AccountDatabaseSeeder())->run();
            (new \Workhub\ProductService\Database\Seeders\ProductServiceDatabaseSeeder())->run();
            (new \Workhub\Syscohada\Database\Seeders\SyscohadaDatabaseSeeder())->run();
            (new \Workhub\Hrm\Database\Seeders\HrmDatabaseSeeder())->run();
            (new \Workhub\Lead\Database\Seeders\LeadDatabaseSeeder())->run();
            (new \Workhub\Taskly\Database\Seeders\TasklyDatabaseSeeder())->run();
            (new \Workhub\Pos\Database\Seeders\PosDatabaseSeeder())->run();
            (new \Workhub\Contract\Database\Seeders\ContractDatabaseSeeder())->run();
            (new \Workhub\BudgetPlanner\Database\Seeders\BudgetPlannerDatabaseSeeder())->run();
            (new \Workhub\Quotation\Database\Seeders\QuotationDatabaseSeeder())->run();
            (new \Workhub\DoubleEntry\Database\Seeders\DoubleEntryDatabaseSeeder())->run();
            (new \Workhub\SupportTicket\Database\Seeders\SupportTicketDatabaseSeeder())->run();
            (new \Workhub\Recruitment\Database\Seeders\RecruitmentDatabaseSeeder())->run();
            (new \Workhub\Performance\Database\Seeders\PerformanceDatabaseSeeder())->run();
            (new \Workhub\Training\Database\Seeders\TrainingDatabaseSeeder())->run();
            (new \Workhub\Timesheet\Database\Seeders\TimesheetDatabaseSeeder())->run();
            (new \Workhub\Goal\Database\Seeders\GoalDatabaseSeeder())->run();
            (new \Workhub\Calendar\Database\Seeders\CalendarDatabaseSeeder())->run();
            (new \Workhub\FormBuilder\Database\Seeders\FormBuilderDatabaseSeeder())->run();
            (new \Workhub\LandingPage\Database\Seeders\LandingPageDatabaseSeeder())->run();
            (new \Workhub\ZoomMeeting\Database\Seeders\ZoomMeetingDatabaseSeeder())->run();
            (new \Workhub\Slack\Database\Seeders\SlackDatabaseSeeder())->run();
            (new \Workhub\Telegram\Database\Seeders\TelegramDatabaseSeeder())->run();
            (new \Workhub\Twilio\Database\Seeders\TwilioDatabaseSeeder())->run();
            (new \Workhub\Webhook\Database\Seeders\WebhookDatabaseSeeder())->run();
            (new \Workhub\AIAssistant\Database\Seeders\AIAssistantDatabaseSeeder())->run();
            (new \Workhub\GoogleCaptcha\Database\Seeders\GoogleCaptchaDatabaseSeeder())->run();
            (new \Workhub\Paypal\Database\Seeders\PaypalDatabaseSeeder())->run();
            (new \Workhub\Stripe\Database\Seeders\StripeDatabaseSeeder())->run();

            // Faker seeder complémentaire (Factures de vente, d'achat et devis)
            (new GenericFakerSeeder())->run();
        }
    }
}
