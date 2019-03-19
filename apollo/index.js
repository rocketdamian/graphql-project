require('dotenv').config();

const { ApolloServer, gql } = require('apollo-server');
const { prisma } = require('../prisma/generated/prisma-client');

const typeDefs = gql`
  scalar DateTime

  type Query {
    users: [User]
  }

  type User {
    id: ID!
    email: String
    name: String!
  }

  type Mutation {
    createUser(name: String!, email: String!): User!,
    deleteUser(id: ID!): User
    updateUser(id: ID!, name: String!, email: String!): User!
  }
`;

const resolvers = {
  Query: {
    users: (parent, args, ctx) => ctx.db.users()
  },

  Mutation: {
    createUser: (parent, args, ctx) => {
      return ctx.db.createUser({
        email: args.email,
        name: args.name
      });
    },
    deleteUser: (parent, { id }, ctx) => ctx.db.deleteUser({ id }),
    updateUser: (parent, args, ctx) => {
      return ctx.db.updateUser({
        where: {id: args.id},
        data: {
          email: args.email,
          name: args.name
        }
      })
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { db: prisma }
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});