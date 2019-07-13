import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { environment } from "./env";

import resolvers from "./resolvers";
import typeDefs from "./schema/secondary.graphql";

const server = new ApolloServer({
  schema: buildFederatedSchema([{ resolvers, typeDefs }]),
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground,
  tracing: environment.apollo.tracing
});

server
  .listen(environment.port)
  .then(({ url }) =>
    console.log(`\n🚀🚀🚀  Secondary Service ready at ${url} 🚀🚀🚀\n`)
  );

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log("\nModule disposed. \n"));
}

process.once("SIGUSR2", function() {
  process.kill(process.pid, "SIGUSR2");
});
