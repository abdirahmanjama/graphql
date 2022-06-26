const UserList = [
    {
        id: 1,
        name: "John",
        username: "john",
        age: 20,
        nationality: "CANADA",
        friends: [
          {
            id: 2,
            name: "Pedro",
            username: "PedroTech",
            age: 20,
            nationality: "BRAZIL",
          },
          {
            id: 5,
            name: "Kelly",
            username: "kelly2019",
            age: 5,
            nationality: "CHILE",
          },
        ],
      },
      {
        id: 2,
        name: "Pedro",
        username: "PedroTech",
        age: 20,
        nationality: "BRAZIL",
      },
      {
        id: 3,
        name: "Sarah",
        username: "cameron",
        age: 25,
        nationality: "INDIA",
        friends: [
          {
            id: 2,
            name: "Pedro",
            username: "PedroTech",
            age: 20,
            nationality: "BRAZIL",
          },
        ],
      },
      {
        id: 4,
        name: "Rafe",
        username: "rafe123",
        age: 60,
        nationality: "GERMANY",
      },
      {
        id: 5,
        name: "Kelly",
        username: "kelly2019",
        age: 5,
        nationality: "CHILE",
      },
    ];
    
     const MovieList = [
      {
        id: 1,
        name: "Avengers Endgame",
        familyFriendly: true,
        isInTheaters: true,
        releaseYear: 2022
      },
      {
        id: 2,
        name: "Interstellar",
        familyFriendly: true,
        isInTheaters: true,
        releaseYear: 1998

      },
      {
        id: 3,
        name: "Superbad",
        familyFriendly: false,
        isInTheaters: true,
        releaseYear: 1999

      },
      {
        id: 4,
        name: "Abdirahman Jama The Movie",
        familyFriendly: false,
        isInTheaters: false,
        releaseYear: 2001

      },
];

module.exports = { UserList, MovieList}