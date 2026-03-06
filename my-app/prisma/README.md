# Prisma Schema Evolution

## Development

Apply schema changes directly (recreates the local SQLite database from the schema):

```bash
npx prisma db push
```

Seed the database with initial data:

```bash
npx prisma db seed
```

## Production

When you need tracked, versioned migrations (e.g. for production databases):

```bash
npx prisma migrate dev
```

This generates SQL migration files and applies them. See the [Prisma Migrate docs](https://www.prisma.io/docs/concepts/components/prisma-migrate) for details.
