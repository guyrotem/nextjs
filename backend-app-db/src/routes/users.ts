import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma.js";

export async function userRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return prisma.user.findMany();
  });

  app.get<{ Params: { id: string } }>("/:id", async (request, reply) => {
    const user = await prisma.user.findUnique({
      where: { id: request.params.id },
    });

    if (!user) {
      return reply.status(404).send({ error: "User not found" });
    }

    return user;
  });

  app.post<{ Body: { name: string; email: string } }>("/", async (request, reply) => {
    const { name, email } = request.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    return reply.status(201).send(user);
  });
}
