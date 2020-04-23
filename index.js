const dotenv = require('dotenv');
dotenv.config();
const { ApolloServer } = require('apollo-server');
const resolvers = require('./src/resolvers/resolvers');
const typeDefs = require('./src/schema/schema');

const server = new ApolloServer({ typeDefs, resolvers });

const port = process.env.PORT || 4000;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});