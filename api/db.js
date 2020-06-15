import url from 'url';
import { MongoClient } from 'mongodb';

const books = [
  { id: 1, title: 'The Trials of Brother Jero', rating: 8, authorId: 1 },
  { id: 2, title: 'Half of a Yellow Sun', rating: 9, authorId: 3 },
  { id: 3, title: 'Americanah', rating: 9, authorId: 3 },
  { id: 4, title: 'King Baabu', rating: 9, authorId: 1 },
  { id: 5, title: 'Children of Blood and Bone', rating: 8, authorId: 2 }
];

const authors = [
  { id: 1, firstName: 'Wole', lastName: 'Soyinka' },
  { id: 2, firstName: 'Tomi', lastName: 'Adeyemi' },
  { id: 3, firstName: 'Chimamanda', lastName: 'Adichie' }
];

let cachedDb = null;
console.log(
  `DB connection status: ${Boolean(cachedDb) ? 'CONNECTED' : 'NOT CONNECTED'}`
);

async function connectToDatabase(uri) {
  if (
    cachedDb
    // cachedDb.serverConfig &&
    // cachedDb.serverConfig.isConnected()
  ) {
    console.log('Connection exist! Re-using cached DB instance');
    return cachedDb;
  }

  try {
    console.log('Connecting to DB...............................');
    const dbConnection = await MongoClient.connect(uri, {
      useNewUrlParser: true
    });
    const connectedDb = await dbConnection.db(
      url.parse(uri).pathname.substr(1)
    );
    cachedDb = connectedDb;
    console.log('DB Connection Initialized');
  } catch (err) {
    throw new Error('[MongoDB] Connection Error: ' + err);
  }

  return connectedDb;
}

export default async () => {
  const db = await connectToDatabase(process.env.MONGODB_URI);

  return {
    db,
    books,
    authors
  };
};
