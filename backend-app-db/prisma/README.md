# Prisma Schema Evolution

## Development

Apply schema changes directly (recreates the local SQLite database from the schema):

```bash
pnpm prisma db push
```

Seed the database with initial data:

```bash
pnpm prisma db seed
```

## Production

When you need tracked, versioned migrations (e.g. for production databases):

```bash
pnpm prisma migrate dev
```

This generates SQL migration files and applies them. See the [Prisma Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate) for details.
