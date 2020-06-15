import { books } from './query';
import { addUser, getUser } from './query/users';
import { getMflix } from './query';

const authors = [
  { id: 1, firstName: 'Wole', lastName: 'Soyinka' },
  { id: 2, firstName: 'Tomi', lastName: 'Adeyemi' },
  { id: 3, firstName: 'Chimamanda', lastName: 'Adichie' },
];

let bookId = 5;

const resolvers = {
  Query: {
    books,
    book: (_, { id }) => books.find((book) => book.id === id),
    author: (_, { id }) => authors.find((author) => author.id === id),
    sayHello: (parent, args, context) => 'Hello World!',
    getMflix,
    getUser,
  },

  Mutation: {
    addBook: (_, { title, rating, authorId }) => {
      bookId++;

      const newBook = {
        id: bookId,
        title,
        rating,
        authorId,
      };

      books.push(newBook);
      return newBook;
    },

    addUser,
  },
  Author: {
    books: (author) => books.filter((book) => book.authorId === author.id),
  },
  Book: {
    author: (book) => authors.find((author) => author.id === book.authorId),
  },
};

export default resolvers;
