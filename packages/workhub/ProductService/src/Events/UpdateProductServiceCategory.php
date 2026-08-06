<?php

namespace Workhub\ProductService\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\ProductService\Models\ProductServiceCategory;

class UpdateProductServiceCategory
{
    use Dispatchable;

    public function __construct(
        public Request $request,
        public ProductServiceCategory $itemCategory
    ) {}
}
