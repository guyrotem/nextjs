# Backend App

A Node.js backend template using Fastify + TypeScript + Prisma (SQLite).

## Getting Started

```bash
pnpm install
cp .env.example .env
pnpm prisma db push
pnpm prisma db seed
pnpm dev
```

The server starts at `http://localhost:3000`.

## API Routes

| Method | Path             | Description     |
|--------|------------------|-----------------|
| GET    | /api/echo        | Echo query params |
| GET    | /api/users       | List all users  |
| GET    | /api/users/:id   | Get user by ID  |
| POST   | /api/users       | Create a user   |

## Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `pnpm dev`   | Start dev server with hot reload     |
| `pnpm build` | Compile TypeScript to `dist/`        |
| `pnpm start`     | Run compiled server from `dist/`     |
| `pnpm lint`  | Run ESLint                           |
| `pnpm seed`  | Seed the database with sample data   |
