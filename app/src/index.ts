import { makeApp } from "./makeApp";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = Number(process.env.PORT ?? "4000");
const app = makeApp();

app.listen({ host: HOST, port: PORT });

app.log.info({}, `server listening at http://localhost:${PORT}`);
