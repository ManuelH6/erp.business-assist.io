# Assisthub — Documentation d'installation & de développement

> **Stack :** Laravel 12 · React 18 (TypeScript) · Inertia.js · Vite · TailwindCSS · shadcn/ui · Spatie Permissions · MySQL/SQLite

---

## Table des matières

1. [Présentation du projet](#1-présentation-du-projet)
2. [Architecture du projet](#2-architecture-du-projet)
3. [Prérequis](#3-prérequis)
4. [Installation manuelle (méthode recommandée)](#4-installation-manuelle-méthode-recommandée)
5. [Contourner l'installeur graphique](#5-contourner-linstalleur-graphique)
6. [Installer les modules (packages/workhub)](#6-installer-les-modules-packagesworkhub)
7. [Lancer le projet en développement](#7-lancer-le-projet-en-développement)
8. [Comptes par défaut](#8-comptes-par-défaut)
9. [Commandes Artisan personnalisées](#9-commandes-artisan-personnalisées)
10. [Comprendre le système de modules](#10-comprendre-le-système-de-modules)
11. [Pourquoi le db:seed ne seed rien ?](#11-pourquoi-le-dbseed-ne-seed-rien-)
12. [Activer le référentiel comptable SYSCOHADA](#12-activer-le-référentiel-comptable-syscohada)
13. [Dépannage](#13-dépannage)

---

## 1. Présentation du projet

Assisthub est une application ERP multi-tenant construite avec **Laravel 12** côté back-end et **React 18 + Inertia.js** côté front-end.

L'application est structurée autour d'un **noyau Laravel** et d'un ensemble de **modules (packages)** situés dans `packages/workhub/`. Chaque module peut être activé ou désactivé indépendamment.

**Modules disponibles :**

| Module | Description |
|--------|-------------|
| `Account` | Gestion comptable |
| `AIAssistant` | Assistant IA |
| `BudgetPlanner` | Planification budgétaire |
| `Calendar` | Calendrier |
| `Contract` | Contrats |
| `DoubleEntry` | Comptabilité en partie double |
| `FormBuilder` | Constructeur de formulaires |
| `Goal` | Objectifs |
| `GoogleCaptcha` | Protection CAPTCHA |
| `Hrm` | Gestion des ressources humaines |
| `LandingPage` | Page d'accueil publique |
| `Lead` | Gestion des prospects |
| `Paypal` | Paiement PayPal |
| `Performance` | Évaluation des performances |
| `Pos` | Point de vente |
| `ProductService` | Produits & services |
| `Quotation` | Devis |
| `Recruitment` | Recrutement |
| `Slack` | Intégration Slack |
| `Stripe` | Paiement Stripe |
| `SupportTicket` | Tickets de support |
| `Syscohada` | Plan comptable SYSCOHADA |
| `Taskly` | Gestion des tâches |
| `Telegram` | Intégration Telegram |
| `Timesheet` | Feuilles de temps |
| `Training` | Formation |
| `Twilio` | SMS Twilio |
| `Webhook` | Webhooks |
| `ZoomMeeting` | Intégration Zoom |

---

## 2. Architecture du projet

```
assisthub/
├── app/
│   ├── Console/Commands/        # Commandes Artisan custom
│   │   ├── InstallCommand.php   # php artisan app:install
│   │   ├── PackageSeed.php      # php artisan package:seed {Module}
│   │   └── ...
│   ├── Http/
│   │   ├── Controllers/
│   │   │   └── InstallerController.php  # Contrôleur de l'installeur web
│   │   └── Middleware/
│   │       └── CheckInstallation.php    # Redirige vers /install si non installé
│   └── Models/
├── database/
│   ├── migrations/              # Migrations du noyau
│   └── seeders/                 # Seeders du noyau
├── packages/workhub/             # Modules additionnels
│   ├── {Module}/
│   │   └── src/
│   │       ├── Database/        # Migrations & Seeders
│   │       ├── Http/            # Controllers
│   │       ├── Models/          # Eloquent Models
│   │       ├── Resources/
│   │       │   ├── js/          # Composants React (Pages) & TypeScript
│   │       │   └── lang/        # Traductions du module
│   │       └── routes/          # Routes (web.php, api.php)
│   └── ...
├── resources/
│   ├── js/                      # Frontend global React + Inertia
│   │   ├── components/ui/       # Composants UI partagés (shadcn/ui style Dribbble)
│   │   ├── layouts/             # Layouts de l'application
│   │   └── Pages/               # Pages React (Dashboard, Auth, etc.)
│   └── lang/                    # Fichiers de traduction globaux (ex: fr.json)
├── routes/
│   ├── web.php                  # Routes principales
│   ├── installer.php            # Routes de l'installeur (/install/*)
│   └── auth.php                 # Routes d'authentification
├── storage/
│   └── installed                # Fichier sentinelle (créé après installation)
└── .env                         # Configuration locale
```

### Mécanisme de protection

Le middleware `CheckInstallation` vérifie si le fichier **`storage/installed`** existe :
- S'il **n'existe pas** → redirige toutes les requêtes vers `/install`
- S'il **existe** → laisse passer normalement

C'est pourquoi même avec `.env` et migrations faites manuellement, vous êtes toujours bloqué sur l'installeur.

---

## 3. Prérequis

| Dépendance | Version minimale |
|------------|-----------------|
| PHP | >= 8.2 |
| Composer | >= 2.x |
| Node.js | >= 18.x |
| npm | >= 9.x |
| MySQL | >= 8.0 (ou MariaDB 10.6+) |
| Extensions PHP | openssl, pdo, pdo_mysql, mbstring, tokenizer, xml, ctype, json, curl, zip |

---

## 4. Installation manuelle (méthode recommandée)

> Cette méthode **court-circuite complètement l'installeur graphique** et vous donne le contrôle total, comme pour n'importe quel projet Laravel.

### Étape 1 — Cloner/copier le projet

Placez le projet dans votre répertoire web (ex: `c:\wamp64\www\assisthub`).

### Étape 2 — Installer les dépendances PHP

```bash
composer install
```

### Étape 3 — Configurer le fichier .env

```bash
copy .env.example .env
```

Éditez `.env` avec vos paramètres :

```env
APP_NAME="Assisthub"
APP_ENV=local
APP_KEY=                        # Sera généré à l'étape suivante
APP_DEBUG=true
APP_TIMEZONE=Africa/Abidjan     # Adaptez à votre fuseau
APP_URL=http://localhost/assisthub/public

APP_LOCALE=fr
APP_FALLBACK_LOCALE=fr

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=assisthub               # Nom de votre base de données
DB_USERNAME=root
DB_PASSWORD=                    # Votre mot de passe MySQL

SESSION_DRIVER=file
SESSION_LIFETIME=120
CACHE_STORE=file
QUEUE_CONNECTION=database

MAIL_MAILER=log
MAIL_FROM_ADDRESS="noreply@example.com"
MAIL_FROM_NAME="${APP_NAME}"

VITE_APP_NAME="${APP_NAME}"
```

### Étape 4 — Générer la clé d'application

```bash
php artisan key:generate
```

### Étape 5 — Créer la base de données

Dans phpMyAdmin ou via MySQL CLI :

```sql
CREATE DATABASEassisthub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### Étape 6 — Lancer les migrations du noyau

```bash
php artisan migrate --force
```

### Étape 7 — Seeder le noyau (rôles, permissions, utilisateurs, plans)

```bash
php artisan db:seed --force
```

> ⚠️ **Important :** Le `DatabaseSeeder` attend que l'utilisateur `superadmin@example.com` soit créé par `PermissionRoleSeeder` **avant** de pouvoir appeler `User::CompanySetting($userId)`. Les seeders sont appelés dans cet ordre :
> 1. `PermissionRoleSeeder` → Crée superadmin + company + rôles + permissions
> 2. `DefultSetting` → Crée les paramètres de l'admin
> 3. `PlanSeeder` → Crée les plans tarifaires
> 4. `EmailTemplatesSeeder` → Crée les templates email
> 5. `NotificationsTableSeeder` → Crée les notifications

### Étape 8 — Lancer les migrations de chaque module

Chaque module a ses propres migrations dans `packages/workhub/{Module}/src/Database/Migrations/` :

```bash
# Option A : Un module à la fois
php artisan migrate --path=/packages/workhub/Hrm/src/Database/Migrations --force
php artisan migrate --path=/packages/workhub/Account/src/Database/Migrations --force
php artisan migrate --path=/packages/workhub/ProductService/src/Database/Migrations --force
# ... répétez pour chaque module voulu

# Option B : Script PowerShell pour tous les modules d'un coup
Get-ChildItem -Path "packages\workhub" -Directory | ForEach-Object {
    $path = "/packages/workhub/$($_.Name)/src/Database/Migrations"
    if (Test-Path "packages\workhub\$($_.Name)\src\Database\Migrations") {
        php artisan migrate --path=$path --force
    }
}
```

### Étape 9 — Seeder les modules

```bash
# Un module à la fois
php artisan package:seed Hrm
php artisan package:seed Account
php artisan package:seed ProductService
# ... etc.

# Tous les modules d'un coup
php artisan package:seed
```

### Étape 10 — Enregistrer les modules actifs en base

Chaque module doit être enregistré dans la table `add_ons`. Exemple minimal via Artisan tinker :

```bash
php artisan tinker
```

```php
use App\Models\AddOn;

$modules = ['Hrm', 'Account', 'ProductService', 'Taskly', 'Lead', 'Pos', 'Calendar', 'DoubleEntry', 'BudgetPlanner', 'Goal', 'Performance', 'Quotation', 'Recruitment', 'SupportTicket', 'Timesheet', 'Training', 'Webhook'];

foreach ($modules as $name) {
    $jsonPath = base_path("packages/workhub/{$name}/module.json");
    if (file_exists($jsonPath)) {
        $data = json_decode(file_get_contents($jsonPath), true);
        AddOn::firstOrCreate(
            ['module' => $data['name']],
            [
                'name' => $data['alias'],
                'monthly_price' => $data['monthly_price'] ?? 0,
                'yearly_price' => $data['yearly_price'] ?? 0,
                'package_name' => $data['package_name'] ?? null,
                'for_admin' => $data['for_admin'] ?? false,
                'priority' => $data['priority'] ?? 0,
                'is_enable' => 1,
            ]
        );
        echo "✓ {$name} enregistré\n";
    }
}
```

### Étape 11 — Créer le fichier sentinelle

C'est l'étape **critique** : sans ce fichier, le middleware vous redirige en permanence vers `/install`.

```bash
# PowerShell
echo "install $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" > storage\installed

# Ou via Artisan tinker
php artisan tinker --execute="file_put_contents(storage_path('installed'), 'install ' . date('Y-m-d H:i:s'));"
```

### Étape 12 — Configurer le storage

```bash
php artisan storage:link
```

### Étape 13 — Vider les caches

```bash
php artisan config:clear
php artisan cache:clear
php artisan route:clear
php artisan view:clear
```

### Étape 14 — Installer les dépendances front-end et compiler

```bash
npm install
npm run build     # Pour la production
# OU
npm run dev       # Pour le développement (hot reload)
```

---

## 5. Contourner l'installeur graphique

L'installeur graphique (`/install/*`) échoue car il fait `migrate:fresh` (drop + recréation de toutes les tables), ce qui peut planter si la connexion DB ou les permissions ne sont pas parfaites au moment de l'appel HTTP.

**Pour ne plus jamais voir l'installeur**, il suffit de s'assurer que le fichier `storage/installed` existe :

```bash
# Via tinker (recommandé)
php artisan tinker --execute="file_put_contents(storage_path('installed'), 'install ' . date('Y-m-d H:i:s'));"
```

Une fois ce fichier créé, le middleware `CheckInstallation` laissera passer toutes les requêtes normalement.

> Si vous souhaitez **désactiver définitivement** l'installeur web, retirez le middleware `CheckInstallation` de votre `bootstrap/app.php` ou `Kernel.php`.

---

## 6. Installer les modules (packages/workhub)

Chaque module dans `packages/workhub/` suit la convention :

```
packages/workhub/{ModuleName}/
├── module.json                  # Métadonnées du module
└── src/
    ├── Database/
    │   ├── Migrations/          # Migrations propres au module
    │   └── Seeders/             # Seeders propres au module
    ├── Http/Controllers/
    ├── Models/
    ├── Providers/
    ├── Resources/
    │   ├── js/                  # Interfaces React & composants TSX du module
    │   └── lang/                # Fichiers de localisation spécifiques au module
    └── routes/                  # Définitions de routes du module
```

**Commandes pour un module spécifique :**

```bash
# Migrer
php artisan migrate --path=/packages/workhub/Hrm/src/Database/Migrations --force

# Seeder (utilise package:seed qui cherche Workhub\{Module}\Database\Seeders\{Module}DatabaseSeeder)
php artisan package:seed Hrm
```

---

## 7. Lancer le projet en développement

### Avec WAMP (Windows)

1. Assurez-vous que WAMP est démarré (Apache + MySQL)
2. Accédez à : `http://localhost/assisthub/public`

> **Recommandé** : Configurez un Virtual Host Apache pour éviter les problèmes de sous-dossier.

Ajoutez dans `c:\wamp64\bin\apache\apache2.x.x\conf\extra\httpd-vhosts.conf` :

```apache
<VirtualHost *:80>
    ServerName assisthub.local
    DocumentRoot "c:/wamp64/www/assisthub/public"
    <Directory "c:/wamp64/www/assisthub/public">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

Puis dans `C:\Windows\System32\drivers\etc\hosts` :
```
127.0.0.1   assisthub.local
```

### Front-end en mode développement (hot reload)

Dans un terminal séparé :

```bash
cd "c:\wamp64\www\assisthub"
npm run dev
```

---

## 8. Comptes par défaut

Après le seeding (`db:seed`), les comptes suivants sont créés automatiquement :

| Rôle | Email | Mot de passe |
|------|-------|--------------|
| **Super Admin** | `superadmin@example.com` | `1234` |
| **Company** | `company@example.com` | `1234` |

> ⚠️ Changez ces mots de passe immédiatement en production !

### Plans tarifaires créés

| Plan | Utilisateurs | Prix mensuel | Prix annuel |
|------|-------------|-------------|-------------|
| Free Plan | 10 | Gratuit | Gratuit |
| Starter Plan | 50 | $25/mois | $240/an |
| Professional Plan | 100 | $99/mois | $960/an |

---

## 9. Commandes Artisan personnalisées

| Commande | Description |
|----------|-------------|
| `php artisan app:install` | Installe l'application (crée le fichier `storage/installed`) |
| `php artisan app:install --force` | Force la réinstallation |
| `php artisan package:seed` | Seede tous les modules |
| `php artisan package:seed {ModuleName}` | Seede un module spécifique |

---

## 10. Comprendre le système de modules

### Détection des modules actifs

L'application charge les modules **actifs** depuis la table `add_ons`. Un module est considéré actif si `is_enable = 1`.

### Service Providers des modules

Chaque module enregistre ses routes, vues, migrations via son `ServiceProvider`. Ces providers sont découverts automatiquement grâce à `php artisan package:discover` (exécuté après `composer install`).

### Plans SaaS

Les plans (`plans` table) contrôlent **quels modules** sont accessibles à quelle entreprise (`company`). Le champ `modules` est un JSON array contenant les noms des modules autorisés.

---

## 11. Pourquoi le db:seed ne seed rien ?

Le `DatabaseSeeder` appelle les seeders dans l'ordre suivant :

```php
(new PermissionRoleSeeder())->run();  // Crée superadmin + company
(new DefultSetting())->run();          // Nécessite superadmin existant
(new PlanSeeder())->run();             // Crée les plans
(new EmailTemplatesSeeder())->run();
(new NotificationsTableSeeder())->run();
// Puis cherche l'ID de company@example.com :
$userId = User::where('email', 'company@example.com')->first()->id;
User::CompanySetting($userId);
```

**Causes fréquentes d'échec silencieux :**

1. **Tables non migrées** → Le seeder plante en silence car les tables n'existent pas encore.  
   → Solution : Lancez toujours `php artisan migrate` **avant** `db:seed`.

2. **`PermissionRoleSeeder` échoue** → `DefultSetting` et les suivants ne trouvent pas l'utilisateur admin.  
   → Vérifiez que la table `users` et les tables Spatie (`roles`, `permissions`, `model_has_roles`, etc.) existent.

3. **`config('app.run_demo_seeder')` non défini** → Les seeders de démo sont ignorés (c'est normal, ils ne sont seedés que si cette variable est à `true` dans `.env`).

4. **Spatie Permissions** : Les tables `roles`, `permissions`, `model_has_roles`, `model_has_permissions`, `role_has_permissions` doivent exister. Elles sont créées par les migrations Spatie incluses dans le projet.

**Pour déboguer le seeder :**

```bash
php artisan db:seed --class=Database\\Seeders\\PermissionRoleSeeder --force
php artisan db:seed --class=Database\\Seeders\\DefultSetting --force
php artisan db:seed --class=Database\\Seeders\\PlanSeeder --force
php artisan db:seed --class=Database\\Seeders\\EmailTemplatesSeeder --force
php artisan db:seed --class=Database\\Seeders\\NotificationsTableSeeder --force
```

---

## 12. Activer le référentiel comptable SYSCOHADA

Le module **SYSCOHADA** (révisé 2017) est disponible dans `packages/workhub/Syscohada`. Il permet d'initialiser le plan de comptes et les structures comptables conformes aux directives de l'OHADA (17 États membres).

### Activation

1. Dans votre fichier `.env` (ou `.env.example`), ajoutez ou modifiez la ligne suivante :
   ```env
   ACCOUNTING_FRAMEWORK=syscohada
   ```

2. Lors de la création d'une nouvelle entreprise ou de l'initialisation des données de base de la comptabilité, le système utilisera le plan de comptes standard révisé 2017 et les classes comptables (Classes 1 à 8) de l'OHADA.

### Initialisation manuelle

Pour charger le plan de comptes SYSCOHADA lors de l'installation ou de la réinitialisation de l'application (en ayant préalablement activé `ACCOUNTING_FRAMEWORK=syscohada` dans le `.env`) :

```bash
php artisan db:seed --force
```

---

## 13. Dépannage

### Erreur 500 sur `/install/database`

L'installeur appelle `migrate:fresh` via HTTP, ce qui peut expirer ou planter. **Ne pas utiliser l'installeur graphique.** Suivez la méthode manuelle (§4).

### Toujours redirigé vers `/install`

Le fichier `storage/installed` n'existe pas. Créez-le :

```bash
php artisan tinker --execute="file_put_contents(storage_path('installed'), 'install ' . date('Y-m-d H:i:s'));"
```

### `Class not found` pour un module

Lancez :

```bash
composer dump-autoload
php artisan package:discover
```

### Les assets (CSS/JS) ne se chargent pas

```bash
npm install
npm run build
```

Puis vérifiez que `public/build/manifest.json` existe.

### Problème de permissions sur Windows (WAMP)

Assurez-vous que les dossiers suivants sont accessibles en écriture :
- `storage/app`
- `storage/framework`
- `storage/logs`
- `bootstrap/cache`

### Réinitialiser complètement la base de données

```bash
php artisan migrate:fresh --force
php artisan db:seed --force
# Puis seeder les modules voulus :
php artisan package:seed
```

N'oubliez pas de recréer le fichier sentinelle après :

```bash
php artisan tinker --execute="file_put_contents(storage_path('installed'), 'install ' . date('Y-m-d H:i:s'));"
```

---

## Récapitulatif express (TL;DR)

```bash
# 1. Dépendances
composer install
npm install

# 2. Configuration
copy .env.example .env
# → Éditer .env avec DB_DATABASE, DB_USERNAME, DB_PASSWORD, APP_URL

# 3. Clé
php artisan key:generate

# 4. Base de données (créer la DB d'abord dans phpMyAdmin)
php artisan migrate --force
php artisan db:seed --force

# 5. Modules (migrer + seeder)
php artisan migrate --path=/packages/workhub/Hrm/src/Database/Migrations --force
php artisan package:seed Hrm
# ... répéter pour chaque module

# 6. Créer le fichier sentinelle (INDISPENSABLE)
php artisan tinker --execute="file_put_contents(storage_path('installed'), 'install ' . date('Y-m-d H:i:s'));"

# 7. Storage & caches
php artisan storage:link
php artisan config:clear && php artisan cache:clear

# 8. Build front
npm run build

# 9. Accéder à l'app
# → http://assisthub.local  (ou http://localhost/assisthub/public)
# → Connexion : superadmin@example.com / 1234
```

<!-- 
For error
 Whoops\Exception\ErrorException 

  Allowed memory size of 134217728 bytes exhausted (tried to allocate 524288 bytes)

Solution
php -r "file_put_contents('c:/wamp64/www/assisthub/storage/installed', 'install ' . date('Y-m-d H:i:s'));"


For error seeder 

php artisan package:seed ModuleName -->

