const { ApolloServer } = require("apollo-server");

import { allResolvers } from "./build-resolvers";
import { getTypeDefs } from "./schema/index";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs: getTypeDefs(), resolvers: allResolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
