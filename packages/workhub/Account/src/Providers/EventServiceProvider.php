<?php

namespace Workhub\Account\Providers;

use App\Events\ApprovePurchaseReturn;
use App\Events\ApproveSalesReturn;
use App\Events\CreateTransfer;
use App\Events\DefaultData;
use App\Events\DestroyTransfer;
use App\Events\GivePermissionToRole;
use App\Events\PostPurchaseInvoice;
use App\Events\PostSalesInvoice;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Workhub\Account\Listeners\BankAccountFieldUpdate;
use Workhub\Account\Listeners\CreateDebitNoteFromReturn;
use Workhub\Account\Listeners\CreateCreditNoteFromReturn;
use Workhub\Account\Listeners\UpdateMobileServicePaymentStatusLis;
use Workhub\Account\Listeners\DataDefault;
use Workhub\Account\Listeners\PostPurchaseInvoiceListener;
use Workhub\Account\Listeners\CreateTransferListener;
use Workhub\Account\Listeners\DestroyTransferListener;
use Workhub\Account\Listeners\GiveRoleToPermission;
use Workhub\Account\Listeners\PostSalesInvoiceListener;
use Workhub\Account\Listeners\UpdateRetainerPaymentStatusListener;
use Workhub\Retainer\Events\UpdateRetainerPaymentStatus;
use Workhub\Account\Listeners\UpdateCommissionPaymentStatusListener;
use Workhub\Commission\Events\UpdateCommissionPaymentStatus;
use Workhub\Account\Listeners\PaySalaryListener;
use Workhub\Hrm\Events\PaySalary;
use Workhub\Account\Listeners\CreatePosListener;
use Workhub\Fleet\Events\MarkFleetBookingPaymentPaid;
use Workhub\MobileServiceManagement\Events\UpdateMobileServicePaymentStatus;
use Workhub\Pos\Events\CreatePos;
use Workhub\Account\Listeners\MarkFleetBookingPaymentPaidListener;
use Workhub\Fleet\Events\CraeteFleetBookingPayment;
use Workhub\MobileServiceManagement\Events\CreateMobileServicePayment;
use Workhub\Account\Listeners\BeautyBookingPaymentListener;
use Workhub\DairyCattleManagement\Events\CreateDairyCattlePayment;
use Workhub\DairyCattleManagement\Events\UpdateDairyCattlePaymentStatus;
use Workhub\Paypal\Events\BeautyBookingPaymentPaypal;
use Workhub\Stripe\Events\BeautyBookingPaymentStripe;
use Workhub\Account\Listeners\UpdateDairyCattlePaymentStatusListener;
use Workhub\CateringManagement\Events\CreateCateringOrderPayment;
use Workhub\CateringManagement\Events\UpdateCateringOrderPaymentStatus;
use Workhub\Account\Listeners\UpdateCateringOrderPaymentStatusListener;
use Workhub\Account\Listeners\UpdatePropertyPaymentStatusListener;
use Workhub\Account\Listeners\UpdateSalesAgentCommissionPaymentStatusLis;
use Workhub\Account\Listeners\ApproveSalesAgentCommissionAdjustmentLis;
use Workhub\Account\Listeners\ConvertSalesRetainerListener;
use Workhub\Commission\Events\CreateCommissionPayment;
use Workhub\PropertyManagement\Events\CreatePropertyPayment;
use Workhub\PropertyManagement\Events\UpdatePropertyPaymentStatus;
use Workhub\Hrm\Events\CreatePayroll;
use Workhub\Hrm\Events\UpdatePayroll;
use Workhub\Retainer\Events\ConvertSalesRetainer;
use Workhub\SalesAgent\Events\CreateSalesAgentCommissionPayment;
use Workhub\SalesAgent\Events\UpdateSalesAgentCommissionPaymentStatus;
use Workhub\SalesAgent\Events\ApproveSalesAgentCommissionAdjustment;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        // Add your event listeners here
        DefaultData::class => [
            DataDefault::class,
        ],
        GivePermissionToRole::class => [
            GiveRoleToPermission::class,
        ],
        PostPurchaseInvoice::class => [
            PostPurchaseInvoiceListener::class,
        ],
        PostSalesInvoice::class => [
            PostSalesInvoiceListener::class,
        ],
        CreateTransfer::class => [
            CreateTransferListener::class,
        ],
        DestroyTransfer::class => [
            DestroyTransferListener::class,
        ],
        ApprovePurchaseReturn::class => [
            CreateDebitNoteFromReturn::class,
        ],
        ApproveSalesReturn::class => [
            CreateCreditNoteFromReturn::class,
        ],
        UpdateRetainerPaymentStatus::class => [
            UpdateRetainerPaymentStatusListener::class,
        ],
        ConvertSalesRetainer::class => [
            ConvertSalesRetainerListener::class,
        ],
        CreateCommissionPayment::class => [
            BankAccountFieldUpdate::class,
        ],
        UpdateCommissionPaymentStatus::class => [
            UpdateCommissionPaymentStatusListener::class,
        ],
        PaySalary::class => [
            PaySalaryListener::class,
        ],
        CreatePos::class => [
            BankAccountFieldUpdate::class,
            CreatePosListener::class,
        ],
        CreateMobileServicePayment::class => [
            BankAccountFieldUpdate::class,
        ],
        UpdateMobileServicePaymentStatus::class => [
            UpdateMobileServicePaymentStatusLis::class,
        ],
        CraeteFleetBookingPayment::class => [
            BankAccountFieldUpdate::class,
        ],
        MarkFleetBookingPaymentPaid::class => [
            MarkFleetBookingPaymentPaidListener::class,
        ],
        BeautyBookingPaymentStripe::class => [
            BeautyBookingPaymentListener::class,
        ],
        BeautyBookingPaymentPaypal::class => [
            BeautyBookingPaymentListener::class,
        ],
        CreateDairyCattlePayment::class => [
            BankAccountFieldUpdate::class,
        ],
        UpdateDairyCattlePaymentStatus::class => [
            UpdateDairyCattlePaymentStatusListener::class,
        ],
        CreateCateringOrderPayment::class => [
            BankAccountFieldUpdate::class,
        ],
        UpdateCateringOrderPaymentStatus::class => [
            UpdateCateringOrderPaymentStatusListener::class,
        ],
        CreatePropertyPayment::class => [
            BankAccountFieldUpdate::class,
        ],
        CreatePayroll::class => [
            BankAccountFieldUpdate::class,
        ],
        UpdatePayroll::class => [
            BankAccountFieldUpdate::class,
        ],
        CreateSalesAgentCommissionPayment::class => [
            BankAccountFieldUpdate::class,
        ],
        UpdateSalesAgentCommissionPaymentStatus::class => [
            UpdateSalesAgentCommissionPaymentStatusLis::class,
        ],
        ApproveSalesAgentCommissionAdjustment::class => [
            ApproveSalesAgentCommissionAdjustmentLis::class,
        ],

    ];
}
