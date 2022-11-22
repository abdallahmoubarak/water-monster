import { GraphQLClient } from "graphql-request";

export default async function handler(req, res) {
  const { level, container_id } = req.query;

  if (level && container_id) {
    const graphQLClient = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT, {
      mode: "cors",
    });
    const id = container_id;

    await graphQLClient.request(
      `mutation {
        updateContainers(
          where: { id: "${id}" }
          update: { water_level: ${parseInt(level)} }
        ) {containers {
            id
        }}
    }`,
    );
  }

  res.status(200).end(`Water level is: ${level}`);
}
