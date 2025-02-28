import fastifyEnv from "@fastify/env";
import fp from "fastify-plugin";
import { type Static, Type } from "@sinclair/typebox";

const schema = Type.Object({
  COOKIE_SECRET: Type.String(),
});

//fastify 모듈 확장 fastify.env 로 접근
//앱생명주기동안은 fastify인스턴스에 넣는다.
//요청마다 변경된다 request.내에 넣는다.
declare module "fastify" {
  interface FastifyInstance {
    env: Static<typeof schema>;
  }
}

export default fp(
  async (app) => {
    await app.register(fastifyEnv, {
      confKey: "env",
      schema,
    });
    app.log.info("app.env init");
  },
  {
    name: "env.env",
  }
);
