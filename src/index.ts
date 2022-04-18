const { ApolloServer, gql } = require("apollo-server");

const flowers = [
    {
        id: 1,
        name: "Rose",
        color: 1,
        smell: 1,
    },
    {
        id: 2,
        name: "Tulip",
        color: 2,
        smell: 2,
    },
];

const colors = [
    {
        id: 1,
        name: "Red",
    },
    {
        id: 2,
        name: "Yellow",
    },
];

const smells = [
    {
        id: 1,
        name: "Strong",
    },
    {
        id: 2,
        name: "Weak",
    },
];

const typeDefs = `
  type Query {
    flowers: [Flower]
  }

  type Flower {
    id: ID!
    name: String
    color: Color
    smell: Smell
  }

  type Color {
    id: ID!
    name: String
  }

  type Smell {
    id: ID!
    name: String
  }
`;

const resolvers = {
    Query: {
        flowers: () => flowers.map((flower) => flower.id),
    },
    Flower: {
        id: (flower) => flower.id,
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
