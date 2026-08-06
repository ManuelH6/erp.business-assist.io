<?php

namespace Workhub\ProductService\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\SerializesModels;
use Workhub\ProductService\Models\ProductServiceUnit;

class DestroyProductServiceUnit
{
    use Dispatchable;

    public function __construct(
        public ProductServiceUnit $unit,
    ) {}
}
