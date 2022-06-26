const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("../server/schema/typeDefs")
const { resolvers } = require("../server/schema/resolvers")
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url}) => {
    console.log(`GraphQL server is running on port ${url}`)
})