import { gql } from 'apollo-server-micro';

const typeDefs = gql`
  type Author {
    id: Int!
    firstName: String!
    lastName: String!
    books: [Book]! # the list of books by this author
  }

  type Book {
    id: Int!
    title: String!
    rating: Int!
    author: Author!
  }

  type User {
    _id: String
    name: String
    email: String
    password: String
  }

  type Movie {
    _id: String
    title: String
    fullplot: String
    year: Int
    poster: String
  }

  type Mflix {
    users: [User]
    movies: [Movie]
  }

  type PopUser {
    _id: String
    name: String
    email: String
    images: [String]
    age: Int
    description: String
  }

  # the schema allows the following query
  type Query {
    books: [Book!]!
    book(id: Int!): Book!
    author(id: Int!): Author!
    sayHello: String
    getMflix: Mflix
    getUser(id: String!): PopUser
  }

  # this schema allows the following mutation
  type Mutation {
    addBook(title: String!, rating: Int!, authorId: Int!): Book!

    addUser(name: String, email: String, age: Int, description: String): PopUser
  }
`;

export default typeDefs;
