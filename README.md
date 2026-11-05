# Accounting ERP · Laravel · Inertia · Vue

Ledgers, tax, reporting and finance workflows. Laravel routes and sessions with Vue pages over the Inertia protocol.

This is a presentation skeleton. Product workflows, identity integration and reviewed API adapters must be implemented and verified before production use. Module plans describe intended behavior; they are not installed or published packages.

Based on [project-boilerplate-laravel-inertia-vue](https://github.com/liberusoftware/project-boilerplate-laravel-inertia-vue) at `efc33c1817797b12cd73c9825ebfbdecc8790fc7`.

## Start locally

Clone this repository, enter its directory and use the declared toolchain and committed lockfiles:

```bash
cp .env.example .env
composer install
npm ci
php artisan key:generate
# Configure a new local database, then apply reviewed migrations.
php artisan migrate
npm run build
php artisan serve
```

Generate an application key only for a new local environment. Keep routes, sessions, CSRF and policy checks on the Laravel side. Select compatible core modules through their actual Composer identities; installation and enablement are separate. Inertia is a page/redirect protocol, not an ordinary REST client. This new shell does not install the full existing Filament module suite or a second identity implementation.

## Verify and extend

```bash
composer validate --strict
php artisan test
npm run typecheck
npm run build
```

Read [AGENTS.md](AGENTS.md), [integration responsibilities](docs/INTEGRATION.md), the [presentation runbook](https://github.com/liberusoftware/documentation/blob/main/guides/presentation/INERTIA.md) and the [product scope](https://github.com/liberusoftware/documentation/blob/main/projects/accounting/README.md). Enable one vertical journey at a time against reviewed contracts. Verify allowed, denied, wrong-tenant, expired-session, validation and concurrency outcomes when implementing protected behavior. A pending operation is not a completed business transition.

## Other projects using Laravel · Inertia · Vue

Use the same presentation foundation for other domains. These repositories provide starting structures; their availability does not establish feature parity.

| Project | Scope |
| --- | --- |
| [Boilerplate](https://github.com/liberusoftware/project-boilerplate-laravel-inertia-vue) | Shared application foundation and module composition |
| [Automation](https://github.com/liberusoftware/project-automation-laravel-inertia-vue) | AI gateways, approvals, rules and integrations |
| [Billing](https://github.com/liberusoftware/project-billing-laravel-inertia-vue) | Subscriptions, pricing, payments and provisioning |
| [Browser Game](https://github.com/liberusoftware/project-browser-game-laravel-inertia-vue) | Game worlds, players and community workflows |
| [CMS](https://github.com/liberusoftware/project-cms-laravel-inertia-vue) | Content authoring, publishing and delivery |
| [Control Panel](https://github.com/liberusoftware/project-control-panel-laravel-inertia-vue) | Infrastructure and hosting operations |
| [CRM](https://github.com/liberusoftware/project-crm-laravel-inertia-vue) | Relationships, sales pipelines and customer service |
| [Ecommerce](https://github.com/liberusoftware/project-ecommerce-laravel-inertia-vue) | Catalogs, checkout, orders and fulfillment |
| [Enterprise SAP](https://github.com/liberusoftware/project-enterprise-sap-laravel-inertia-vue) | Enterprise workspace and cross-product orchestration |
| [Genealogy](https://github.com/liberusoftware/project-genealogy-laravel-inertia-vue) | Family trees, research, evidence and collaboration |
| [Liberu Platform](https://github.com/liberusoftware/project-liberu-official-laravel-inertia-vue) | Official sites, staff applications and platform composition |
| [Maintenance](https://github.com/liberusoftware/project-maintenance-laravel-inertia-vue) | Assets, work orders, schedules and field operations |
| [Music DAW](https://github.com/liberusoftware/project-music-daw-laravel-inertia-vue) | Composition, recording, sequencing and audio production |
| [Real Estate](https://github.com/liberusoftware/project-real-estate-laravel-inertia-vue) | Listings, sales, lettings and agency operations |
| [Social Network](https://github.com/liberusoftware/project-social-network-laravel-inertia-vue) | Profiles, feeds, communities and moderation |

## Other presentations for Accounting ERP

Choose the surface that fits the audience and deployment boundary. The Laravel core remains authoritative across these alternatives.

- [Laravel · Filament](https://github.com/liberusoftware/project-accounting-erp-laravel-filament): PHP/Composer Laravel host with Filament panels.
- [Laravel · Inertia · React](https://github.com/liberusoftware/project-accounting-erp-laravel-inertia-react): Laravel routes and sessions with React pages over the Inertia protocol.
- [Nuxt · Vue](https://github.com/liberusoftware/project-accounting-erp-nuxt-vue): Independent Vue application with Nuxt server rendering and reviewed API integration.
- [Next.js · React](https://github.com/liberusoftware/project-accounting-erp-next-react): Independent React application with explicit Next.js server/client boundaries.
- [React Native · Expo](https://github.com/liberusoftware/project-accounting-erp-mobile-react): Native iOS/Android application using React Native and Expo.
- [Flutter · Mobile](https://github.com/liberusoftware/project-accounting-erp-mobile-flutter): Flutter iOS/Android application using Dart and mobile widgets.
- [Dart · Desktop](https://github.com/liberusoftware/project-accounting-erp-dart-desktop): Dedicated Dart desktop application with a Flutter host for Linux, macOS and Windows.
- [Dart · Mobile](https://github.com/liberusoftware/project-accounting-erp-dart-mobile): Separate Dart mobile application with a Flutter host for iOS and Android.

## License and delivery

See the repository license and preserve upstream notices. Review environment configuration, dependencies, backups and rollback before deployment. Publish reusable packages separately from deploying applications. The CI example, where supplied under `docs/`, must be activated with a credential authorized to manage GitHub workflows.
