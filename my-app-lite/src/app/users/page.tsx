import Link from "next/link";

const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

export default function UsersPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
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
    </main>
  );
}
