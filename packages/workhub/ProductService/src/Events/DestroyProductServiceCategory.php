<?php

namespace Workhub\ProductService\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Workhub\ProductService\Models\ProductServiceCategory;

class DestroyProductServiceCategory
{
    use Dispatchable;

    public function __construct(
        public ProductServiceCategory $itemCategory,
    ) {}
}
