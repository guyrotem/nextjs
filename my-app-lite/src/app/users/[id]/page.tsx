import { notFound } from "next/navigation";

const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = users.find((u) => u.id === id);

  if (!user) notFound();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-400 text-sm mt-2">ID: {user.id}</p>
    </main>
  );
}
