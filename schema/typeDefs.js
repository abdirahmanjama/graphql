const { gql } = require("apollo-server");

//Query is the first node of the graph.. 
//Graph data structure is a collection of
const typeDefs = gql`
    type User {
        id: ID!
        name: String!,
        username: String!
        age: Int! 
        nationality: Nationality!
        friends: [User]
    }

    type Movie {
        id: ID!
        name: String!
        description: String!
        releaseYear: Int
        familyFriendly: Boolean!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
        movies: [Movie!]! 
        allowedMovie(familyFriendly: Boolean!): Movie
    }

    enum Nationality{
        CANADA
        BRAZIL
        INDIA
        GERMANY
        CHILE
    }

`
module.exports = {typeDefs}