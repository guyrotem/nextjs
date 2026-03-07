// Populates the database with sample data for local development.
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: { name: "Alice", email: "alice@example.com" },
  });
  await prisma.user.upsert({
    where: { email: "bob@example.com" },
    update: {},
    create: { name: "Bob", email: "bob@example.com" },
  });
  console.log("Seeded 2 users");
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
