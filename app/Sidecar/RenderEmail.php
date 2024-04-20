<?php

namespace App\Sidecar;

use Hammerstone\Sidecar\LambdaFunction;
use Hammerstone\Sidecar\Package;

class RenderEmail extends LambdaFunction
{
    public function handler(): string
    {
        return 'dist/render-email.handle';
    }

    public function runtime()
    {
        return 'nodejs20.x';
    }

    public function package()
    {
        return Package::make()
            ->setBasePath(resource_path('sidecar/render-email'))
            ->include(['node_modules', 'dist', 'package.json']);
    }
}
