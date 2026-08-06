<?php

namespace Workhub\Syscohada\Providers;

use Illuminate\Support\ServiceProvider;

/**
 * SyscohadaServiceProvider
 *
 * Enregistre le module SYSCOHADA dans l'application Laravel.
 * Ajoutez ce provider dans config/app.php → 'providers' :
 *
 *   Workhub\Syscohada\Providers\SyscohadaServiceProvider::class,
 *
 * Ou via le discovery automatique si le module supporte le package auto-discovery.
 */
class SyscohadaServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Fusion de la config du module avec app.php
        $this->mergeConfigFrom(
            __DIR__ . '/../Config/syscohada.php',
            'syscohada'
        );
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Publication de la config pour la personnalisation
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__ . '/../Config/syscohada.php' => config_path('syscohada.php'),
            ], 'syscohada-config');
        }

        // Chargement des routes web du module
        $routesPath = __DIR__.'/../Routes/web.php';
        if (file_exists($routesPath)) {
            $this->loadRoutesFrom($routesPath);
        }

        // Enregistrement des commandes Artisan du module
        if ($this->app->runningInConsole()) {
            $this->commands([
                // Ajoutez ici des commandes Artisan si nécessaire
            ]);
        }
    }
}
