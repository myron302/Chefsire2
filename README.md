# ChefSire Monorepo

Web + Mobile foundation for ChefSire.

- apps/web: Next.js 14 (App Router, TS, Tailwind, NextAuth-ready)
- apps/mobile: Expo React Native (Expo Router, TS), ready for iOS/Android stores
- packages/db: Shared Prisma schema + client for PostgreSQL

API-first design for mobile clients, with CORS-friendly API routes in apps/web/app/api/*.

See apps/web/README.md and apps/mobile/README.md for local development.
