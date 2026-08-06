<?php

namespace Workhub\Slack\Listeners;

use Workhub\Slack\Services\SendMsg;
use Workhub\WordpressWoocommerce\Events\CreateWoocommerceProduct;

class CreateWoocommerceProductLis
{
    public function __construct()
    {
        //
    }

    public function handle(CreateWoocommerceProduct $event)
    {
        $product = $event->wooProduct;

        if (company_setting('Slack New Product') == 'on') {
            $uArr = [
                'name' => $product['name']
            ];

            SendMsg::SendMsgs($uArr, 'New Product');
        }
    }
}