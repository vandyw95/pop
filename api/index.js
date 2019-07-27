const { ApolloServer } = require('apollo-server-micro');

const typeDefs = require('./type-defs');
const resolvers = require('./resolvers');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

// Some have issue with request, keep this in advance
// https://spectrum.chat/next-js/general/apollo-server-micro-as-an-api-route~6133e1f2-5f93-4dc5-9ff5-e7d1f7b86505
// https://gist.github.com/mfellner/2119db3584023092d70118a8dabd146e#file-graphql-ts-L19-L23
// export const config = {
//   api: {
//     bodyParser: false
//   }
// };

module.exports = apolloServer.createHandler({ path: '/api/graphql' });
