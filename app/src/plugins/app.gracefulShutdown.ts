import fastifyCors from "@fastify/cors";
import fastifyGracefulShutdown from "fastify-graceful-shutdown";
import fp from "fastify-plugin";

export default fp(
  async (app) => {
    await app.register(fastifyGracefulShutdown);

    app.log.info("fastifyGracefulShutdown init");
  },
  {
    name: "fastifyGracefulShutdown",
  }
);
