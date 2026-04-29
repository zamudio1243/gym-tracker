# AGENTS.md

## Project Overview

- App: `gym-tracker`
- Stack: Next.js App Router, React 19, TypeScript, Bun, Tailwind CSS v4, Prisma, Better Auth, TanStack Form, shadcn/ui
- Database: PostgreSQL
- Package manager/runtime: Bun

## Primary Goals

- Keep route files in `app/` thin and compositional.
- Keep reusable primitives in `shared/`.
- Keep domain-specific UI and logic close together.
- Prefer small, direct changes over broad refactors.

## Architecture

This project uses feature-first architecture.

- `app/` contains routes, layouts, and route handlers.
- `features/` is the default home for domain-specific UI, validation, and server logic.
- `shared/ui/` contains reusable UI primitives.
- `shared/lib/` contains shared pure utilities.
- `shared/server/` contains shared server-only infrastructure.
- `generated/` contains generated Prisma client output.
- `prisma/` contains the Prisma schema and migrations config.

There is still some older code in `components/`. Treat that area as legacy feature code.

Use this rule:

- New domain code should go in `features/...`.
- Shared primitives should go in `shared/...`.
- If you touch legacy code in `components/...`, prefer keeping the change small unless the task is explicitly about migrating it into `features/`.

## Directory Rules

### `app/`

Use `app/` for:

- `page.tsx`
- `layout.tsx`
- `route.ts`
- `loading.tsx`
- `error.tsx`

Rules:

- Keep route files small.
- Compose UI from `features/` and `shared/` modules.
- Avoid placing large business logic directly in route files.

### `features/`

This is the default home for feature-specific code.

Suggested structure:

- `features/<feature>/ui/*`
- `features/<feature>/model/*`
- `features/<feature>/server/*`

Use `features/` for:

- flow-specific components and screens
- Zod schemas and feature types
- server actions for the feature
- helpers that only make sense inside that feature

Rules:

- Keep domain code close to the feature that owns it.
- Avoid turning `features/` into a shared utilities bucket.
- If code becomes reusable across multiple features, move it to `shared/`.

### `components/`

This folder contains legacy feature code that predates the `features/` structure.

Existing examples:

- `components/home/forms/*`
- `components/home/schemes/*`
- `components/home/actions/*`
- `components/dashboard/components/*`

Rules:

- Do not place new feature code here by default.
- When making small changes to existing files here, prefer minimal edits in place.
- Move code from `components/` to `features/` only when the task is explicitly a migration or cleanup.

### `shared/ui/`

Use for reusable, domain-agnostic UI primitives.

Current examples:

- `button.tsx`
- `input.tsx`
- `field.tsx`
- `card.tsx`

Rules:

- Do not put feature-specific copy or business rules here.
- Import shared UI with `@/shared/ui/...`.

### `shared/lib/`

Use for shared pure utilities.

Current example:

- `shared/lib/utils.ts` with `cn()`

Rules:

- Keep these helpers framework-light and domain-agnostic.
- Do not put server-only logic here.

### `shared/server/`

Use for shared server-only infrastructure.

Current examples:

- `shared/server/auth.ts`
- `shared/server/prisma.ts`

Rules:

- Do not import these modules into client components.
- Put shared auth/database/service integration here.
- Keep feature-specific server actions outside this folder unless they are truly cross-cutting infrastructure.

### `generated/`

Contains generated files.

Rules:

- Do not edit generated files manually.
- Change source configuration instead, such as `prisma/schema.prisma`.

## Coding Conventions

- Use TypeScript with `strict` mode assumptions.
- Use the `@/*` path alias for imports.
- Prefer direct imports over barrel files.
- Match the existing file's formatting and semicolon style.
- Keep components and helpers small unless abstraction clearly improves the code.
- Add comments only when a block is non-obvious.

## React and Next.js Conventions

- Prefer Server Components by default.
- Add `"use client"` only when client-side interactivity is required.
- Keep server actions in server-only modules.
- Treat server actions like public mutation endpoints: validate input and enforce auth.
- Avoid importing server-only modules into client components.

## Forms and Validation

- Current forms use `@tanstack/react-form`.
- Current validation uses Zod schemas colocated with the feature code.
- Parse unknown inputs in server actions before calling infrastructure.

Typical placement:

- `features/<feature>/ui/*`
- `features/<feature>/model/*`
- `features/<feature>/server/*`

Legacy examples still exist in:

- `components/home/forms/*`
- `components/home/schemes/*`
- `components/home/actions/auth.actions.ts`

## Auth and Database Notes

- Better Auth is configured in `shared/server/auth.ts`.
- Prisma client is generated under `generated/prisma`.
- Prisma uses PostgreSQL through `@prisma/adapter-pg`.
- Database connection comes from `DATABASE_URL`.

If schema changes are required:

1. Update `prisma/schema.prisma`.
2. Run `bun run prisma:generate`.
3. Run `bun run prisma:migrate` when a migration is intended.

## UI Notes

- shadcn/ui is configured via `components.json`.
- Shared UI aliases point to `@/shared/ui`.
- Tailwind CSS v4 styles live in `app/globals.css`.
- The app currently uses Geist fonts in `app/layout.tsx`.

When adding shadcn/ui components, keep generic primitives in `shared/ui/`, not `components/ui/`.

## Commands

Use Bun commands from the repo root:

```bash
bun dev
bun lint
bun lint:fix
bun prisma:generate
bun prisma:migrate
bun prisma:studio
```

For local Postgres, the repo includes `docker-compose.yml`.

## Verification

After code changes, prefer the smallest relevant verification step.

- Run `bun lint` for TypeScript/Next.js code changes.
- Run Prisma generation when schema or generated-client assumptions change.
- Do not edit `.env` in automation unless explicitly asked.

## Change Guidelines For Agents

- Do not rewrite unrelated areas.
- Prefer `features/` for new feature work.
- Do not manually edit generated Prisma output.
- Preserve current naming and import patterns in touched files.
- If you touch legacy code in `components/`, do not do opportunistic large migrations.
- If there is a conflict between old file placement and the feature-first architecture, prefer `features/` for new code.

## Quick Placement Guide

- New route or route handler: `app/`
- New feature-specific UI/model/server code: `features/`
- Shared UI primitive: `shared/ui/`
- Shared pure helper: `shared/lib/`
- Shared server infrastructure: `shared/server/`
- Legacy feature-specific UI/form/schema/action already in `components/`: leave in place unless migrating intentionally
- Generated Prisma client: never edit directly
