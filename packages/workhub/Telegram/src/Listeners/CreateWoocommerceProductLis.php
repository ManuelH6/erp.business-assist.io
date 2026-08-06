<?php

namespace Workhub\Telegram\Listeners;

use Workhub\Telegram\Services\SendMsg;
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

        if (company_setting('Telegram New Product')  == 'on') {

            $uArr = [
                'name' => $product['name']
            ];
            SendMsg::SendMsgs($uArr , 'New Consignment Product');
        }
    }
}
