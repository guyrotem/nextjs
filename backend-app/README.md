# Backend App

A Node.js backend template using Fastify + TypeScript.

## Getting Started

```bash
pnpm install
cp .env.example .env
pnpm dev
```

The server starts at `http://localhost:3000`.

## API Routes

| Method | Path             | Description       |
|--------|------------------|-------------------|
| GET    | /api/echo        | Echo query params |

## Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `pnpm dev`      | Start dev server with hot reload     |
| `pnpm build`    | Compile TypeScript to `dist/`        |
| `pnpm start`    | Run compiled server from `dist/`     |
| `pnpm lint`     | Run ESLint                           |
