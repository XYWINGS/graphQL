import {users,books} from '../../database/mockdb';


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
    users: () => users,
  },

};

export {resolvers}