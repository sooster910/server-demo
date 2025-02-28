import fastify from "fastify";
import "dotenv-safe/config.js";
import fastifyAutoload from "@fastify/autoload";
import path from "node:path";

export function makeApp() {
  const app = fastify({
    logger: true,
  });
  app.register(fastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });
  app.get("/ping", async (req, res) => {
    return { ok: "pong" };
  });
  return app;
}
