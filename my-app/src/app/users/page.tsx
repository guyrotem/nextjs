import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {users.length === 0 ? (
        <p className="text-gray-500">
          No users yet. Run <code className="bg-gray-100 px-1 rounded">npx prisma db seed</code> to add some.
        </p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id}>
              <Link
                href={`/users/${user.id}`}
                className="text-blue-600 hover:underline"
              >
                {user.name}
              </Link>
              <span className="text-gray-500 ml-2">{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
