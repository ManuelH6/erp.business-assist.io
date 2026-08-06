<?php

namespace Workhub\ProductService\Providers;

use App\Events\PostPurchaseInvoice;
use App\Events\ApprovePurchaseReturn;
use App\Events\CompleteSalesReturn;
use App\Events\PostSalesInvoice;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Workhub\Pos\Events\CreatePos;
use Workhub\ProductService\Listeners\PostPurchaseInvoiceListener;
use Workhub\ProductService\Listeners\ApprovePurchaseReturnListener;
use Workhub\ProductService\Listeners\CompleteSalesReturnListener;
use Workhub\ProductService\Listeners\PosCreateListener;
use Workhub\ProductService\Listeners\PostSalesInvoiceListener;
use Workhub\Retainer\Events\ConvertSalesRetainer;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        PostPurchaseInvoice::class => [
            PostPurchaseInvoiceListener::class,
        ],
        PostSalesInvoice::class => [
            PostSalesInvoiceListener::class,
        ],
        ApprovePurchaseReturn::class => [
            ApprovePurchaseReturnListener::class,
        ],
        CompleteSalesReturn::class => [
            CompleteSalesReturnListener::class,
        ],
        CreatePos::class => [
            PosCreateListener::class,
        ],
        ConvertSalesRetainer::class => [
            CompleteSalesReturnListener::class,
        ],
    ];
}
