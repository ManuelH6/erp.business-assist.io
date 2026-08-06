<?php

namespace Workhub\ProductService\Listeners;

use Workhub\Pos\Events\CreatePos;
use Workhub\ProductService\Models\WarehouseStock;

class PosCreateListener
{
    public function handle(CreatePos $event)
    {
        $posSale = $event->posSale;
        foreach ($posSale->items()->get() as $item) {
            $stock = WarehouseStock::where('warehouse_id', $posSale->warehouse_id)
                ->where('product_id', $item->product_id)
                ->first();
            if ($stock) {
                $stock->decrement('quantity', $item->quantity);
            }
        }
    }
}
