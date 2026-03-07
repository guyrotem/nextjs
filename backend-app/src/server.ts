import "dotenv/config";
import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get<{ Querystring: { message?: string } }>("/api/echo", async (request) => {
  return { message: request.query.message ?? "" };
});

const start = async () => {
  const port = Number(process.env.PORT) || 3000;
  await app.listen({ port, host: "0.0.0.0" });
};

start();
