import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) notFound();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-400 text-sm mt-2">ID: {user.id}</p>
    </main>
  );
}
