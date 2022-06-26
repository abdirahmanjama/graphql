const {UserList, MovieList} = require("../fakeData")
const _ = require("lodash");

const resolvers = {
    Query: {
        users: () => {
            return UserList
        },
        //parent argument gives value resolved by parent in chain of types ??
        user(parent, args) {
            return _.find(UserList, {id: Number(args.id)})
        },

        movies: () => {
            return MovieList
        },

        allowedMovie: (parent, args) => {
            return _.find(MovieList, {familyFriendly: Boolean(args.familyFriendly)});
        }
    },

    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            const lastUserID = UserList[UserList.length-1].id;
            user.id = lastUserID + 1;
            UserList.push(user);
            console.log(user)
            return user
        },

        updateUsername: (parent, args) => {
        const { id, newUsername} = args.input;
        let userUpdated; 
        UserList.forEach(user => {
            if(user.id === Number(id)){
                user.username = newUsername;
                userUpdated = user;
            } 
        })
          return userUpdated;
        },

        //TODO: 
        //given an ID -> remove user with ID from list
        deleteUser: (parent, args) => {
            const id = args.id;
            _.remove(UserList, user => user.id === Number(id))
            return null
        }
        
        
    }
}

module.exports = { resolvers }