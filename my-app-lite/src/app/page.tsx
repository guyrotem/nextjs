import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Next.js Template (Lite)</h1>
      <ul className="space-y-2">
        <li>
          <Link href="/counter" className="text-blue-600 hover:underline">
            /counter
          </Link>{" "}
          — Client component with state
        </li>
        <li>
          <Link href="/users" className="text-blue-600 hover:underline">
            /users
          </Link>{" "}
          — Server component with static data
        </li>
        <li>
          <Link href="/api/hello" className="text-blue-600 hover:underline">
            /api/hello
          </Link>{" "}
          — Simple API route
        </li>
        <li>
          <Link href="/api/users" className="text-blue-600 hover:underline">
            /api/users
          </Link>{" "}
          — REST API (in-memory)
        </li>
      </ul>
    </main>
  );
}
