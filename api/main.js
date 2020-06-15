import { ApolloServer } from 'apollo-server-micro';

import typeDefs from './type-defs';
import resolvers from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // introspection: false,
  introspection: true,
  playground: true,
});

// export default () => {
//   console.log('Hello request');
//   return apolloServer.createHandler({ path: '/api/graphql' });
// };

export default apolloServer.createHandler({ path: '/api/graphql' });
