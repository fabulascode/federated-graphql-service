const defaultPort = 4002;

interface Environment {
  apollo: {
    introspection: boolean;
    playground: boolean;
    tracing: boolean;
  };
  port: number | string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === "true",
    playground: process.env.APOLLO_PLAYGROUND === "true",
    tracing: process.env.APOLLO_TRACING === "true"
  },
  port: defaultPort
};
