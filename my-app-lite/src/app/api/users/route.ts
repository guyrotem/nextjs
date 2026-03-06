const users = [
  { id: "1", name: "Alice", email: "alice@example.com" },
  { id: "2", name: "Bob", email: "bob@example.com" },
];

export async function GET() {
  return Response.json(users);
}

export async function POST(request: Request) {
  const body = await request.json();
  const user = { id: crypto.randomUUID(), name: body.name, email: body.email };
  users.push(user);
  return Response.json(user, { status: 201 });
}
