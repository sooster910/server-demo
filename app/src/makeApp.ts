import fastify from "fastify";
import "dotenv-safe/config.js";

export function makeApp() {
  const app = fastify();

  app.get("/ping", async (req, res) => {
    return { ok: "pong" };
  });
  return app;
}
