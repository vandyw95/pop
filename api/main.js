import { ApolloServer } from 'apollo-server-micro';
import url from 'url';
import { MongoClient } from 'mongodb';

import typeDefs from './type-defs';
import resolvers from './resolvers';

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  // introspection: true,
  playground: true
});

let cachedDb = null;
console.log('Current connected DB: ', cachedDb);
console.log('Current MongoDB & "secret": ', process.env.MONGODB_URI);

async function connectToDatabase(uri) {
  if (cachedDb) return cachedDb;

  console.log('Connecting to DB...............................');
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true
  });
  // .then(() => console.log('Connected to POP Atlas cluster'))
  // .catch(err => console.log('=========Error=========', err));

  console.log('AWAITING...............................');
  const db = await client.db(url.parse(uri).pathname.substr(1));

  cachedDb = db;
  console.log('===============');
  console.log('Connected!', db);
  console.log('===============');
  return db;
}

const db = connectToDatabase(process.env.MONGODB_URI);

export default apolloServer.createHandler({ path: '/api/graphql' });
