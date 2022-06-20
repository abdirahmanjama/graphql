const { gql } = require("apollo-server");

//Query is the first node of the graph.. 
//Graph data structure is a collection of
const typeDefs = gql`
    type User {
        name: String!,
        username: String!
        age: Int! 
        nationality: Nationality!
    }

    type Query {
        users: [User!]!
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