import { ApolloServer } from 'apollo-server-micro';

import typeDefs from './type-defs';
import resolvers from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // introspection: true,
  playground: true
});

export default apolloServer.createHandler({ path: '/api/graphql' });
