import fastify from "fastify";

export function makeApp() {
  const app = fastify();

  app.get("/", async (req, res) => {
    return { hello: "world" };
  });
  return app;
}
