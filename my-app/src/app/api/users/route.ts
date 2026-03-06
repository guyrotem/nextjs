import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const user = await prisma.user.create({
    data: { name: body.name, email: body.email },
  });
  return Response.json(user, { status: 201 });
}
