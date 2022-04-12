import { createServer } from "@graphql-yoga/node";
import typeDefinitions from "./shemas.js";
import { resolvers } from "./resolvers.js";

// Create your server
const server = createServer({
  schema: {
    typeDefs: typeDefinitions,
    resolvers: resolvers,
  },
});
// start the server and explore http://localhost:4000/graphql
server.start();
