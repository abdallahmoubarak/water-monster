import { server } from "../../graphql";

const startServer = server.start();

export default async function handler(req, res) {
  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
