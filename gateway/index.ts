import { ApolloServer } from "apollo-server";

import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "main", url: "http://localhost:4001/graphql" },
    { name: "secondary", url: "http://localhost:4002/graphql" }
  ]
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ schema, executor });

  server.listen().then(({ url }) => {
    console.log(`\n🚀🚀🚀  Gateway Server ready at ${url} 🚀🚀🚀\n`);
  });
})();
