<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Workhub\Account\Database\Seeders\AccountDatabaseSeeder;
use Workhub\AIAssistant\Database\Seeders\AIAssistantDatabaseSeeder;
use Workhub\BudgetPlanner\Database\Seeders\BudgetPlannerDatabaseSeeder;
use Workhub\Calendar\Database\Seeders\CalendarDatabaseSeeder;
use Workhub\Contract\Database\Seeders\ContractDatabaseSeeder;
use Workhub\DoubleEntry\Database\Seeders\DoubleEntryDatabaseSeeder;
use Workhub\FormBuilder\Database\Seeders\FormBuilderDatabaseSeeder;
use Workhub\Goal\Database\Seeders\GoalDatabaseSeeder;
use Workhub\GoogleCaptcha\Database\Seeders\GoogleCaptchaDatabaseSeeder;
use Workhub\Hrm\Database\Seeders\HrmDatabaseSeeder;
use Workhub\LandingPage\Database\Seeders\LandingPageDatabaseSeeder;
use Workhub\Lead\Database\Seeders\LeadDatabaseSeeder;
use Workhub\Paypal\Database\Seeders\PaypalDatabaseSeeder;
use Workhub\Performance\Database\Seeders\PerformanceDatabaseSeeder;
use Workhub\Pos\Database\Seeders\PosDatabaseSeeder;
use Workhub\ProductService\Database\Seeders\ProductServiceDatabaseSeeder;
use Workhub\Quotation\Database\Seeders\QuotationDatabaseSeeder;
use Workhub\Recruitment\Database\Seeders\RecruitmentDatabaseSeeder;
use Workhub\Slack\Database\Seeders\SlackDatabaseSeeder;
use Workhub\Stripe\Database\Seeders\StripeDatabaseSeeder;
use Workhub\SupportTicket\Database\Seeders\SupportTicketDatabaseSeeder;
use Workhub\Syscohada\Database\Seeders\SyscohadaDatabaseSeeder;
use Workhub\Taskly\Database\Seeders\TasklyDatabaseSeeder;
use Workhub\Telegram\Database\Seeders\TelegramDatabaseSeeder;
use Workhub\Timesheet\Database\Seeders\TimesheetDatabaseSeeder;
use Workhub\Training\Database\Seeders\TrainingDatabaseSeeder;
use Workhub\Twilio\Database\Seeders\TwilioDatabaseSeeder;
use Workhub\Webhook\Database\Seeders\WebhookDatabaseSeeder;
use Workhub\ZoomMeeting\Database\Seeders\ZoomMeetingDatabaseSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        (new PermissionRoleSeeder)->run();
        (new DefultSetting)->run();
        (new PlanSeeder)->run();
        (new EmailTemplatesSeeder)->run();
        (new NotificationsTableSeeder)->run();

        $userId = User::where('email', 'company@example.com')->first()->id;
        User::CompanySetting($userId);

        // Initialize modules and assign plan to company
        (new PackageSeeder)->run($userId);

        if (config('app.run_demo_seeder')) {
            // // Pass $userId to your custom seeder

            (new CouponSeeder)->run();
            (new DemoUserSeeder)->run();

            (new DemoStaffSeeder)->run($userId);
            (new DemoLoginHistorySeeder)->run($userId);
            (new DemoWarehouseSeeder)->run($userId);
            (new HelpdeskCategorySeeder)->run();
            (new HelpdeskTicketSeeder)->run($userId);
            (new HelpdeskReplySeeder)->run($userId);
            (new DemoOrderSeeder)->run($userId);
            (new DemoCouponSeeder)->run($userId);
            (new DemoBankTransferSeeder)->run($userId);
            (new DemoCouponDetailsSeeder)->run($userId);
            (new MessengerSeeder)->run();

            // in this seeder product
            (new DemoTransferSeeder)->run($userId);

            // Données spécifiques Bénin (Clients, Fournisseurs, TVA/AIB, Comptes bancaires, etc.)
            (new BeninDemoDataSeeder)->run();

            // Appel dynamique de l'ensemble des Seeders des 29 modules Workhub
            (new AccountDatabaseSeeder)->run();
            (new ProductServiceDatabaseSeeder)->run();
            (new SyscohadaDatabaseSeeder)->run();
            (new HrmDatabaseSeeder)->run();
            (new LeadDatabaseSeeder)->run();
            (new TasklyDatabaseSeeder)->run();
            (new PosDatabaseSeeder)->run();
            (new ContractDatabaseSeeder)->run();
            (new BudgetPlannerDatabaseSeeder)->run();
            (new QuotationDatabaseSeeder)->run();
            (new DoubleEntryDatabaseSeeder)->run();
            (new SupportTicketDatabaseSeeder)->run();
            (new RecruitmentDatabaseSeeder)->run();
            (new PerformanceDatabaseSeeder)->run();
            (new TrainingDatabaseSeeder)->run();
            (new TimesheetDatabaseSeeder)->run();
            (new GoalDatabaseSeeder)->run();
            (new CalendarDatabaseSeeder)->run();
            (new FormBuilderDatabaseSeeder)->run();
            (new LandingPageDatabaseSeeder)->run();
            (new ZoomMeetingDatabaseSeeder)->run();
            (new SlackDatabaseSeeder)->run();
            (new TelegramDatabaseSeeder)->run();
            (new TwilioDatabaseSeeder)->run();
            (new WebhookDatabaseSeeder)->run();
            (new AIAssistantDatabaseSeeder)->run();
            (new GoogleCaptchaDatabaseSeeder)->run();
            (new PaypalDatabaseSeeder)->run();
            (new StripeDatabaseSeeder)->run();

            // Faker seeder complémentaire (Factures de vente, d'achat et devis)
            // (new GenericFakerSeeder())->run();
        }
    }
}
