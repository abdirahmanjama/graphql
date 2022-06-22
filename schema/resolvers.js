const {UserList, MovieList} = require("../fakeData")
const _ = require("lodash");

const resolvers = {
    Query: {
        users() {
            return UserList
        },
        //parent argument gives value resolved by parent in chain of types ??
        user(parent, args) {
            return _.find(UserList, {id: Number(args.id)})
        },

        movies() {
            return MovieList
        },

        allowedMovie(parent, args){
            return _.find(MovieList, {familyFriendly: Boolean(args.familyFriendly)});
        }
    }
}

module.exports = { resolvers }