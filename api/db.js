import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;

let cachedDb = null;
console.log(
  `DB connection status: ${cachedDb ? 'CONNECTED' : 'NOT CONNECTED'}`
);

async function connectToDatabase(uri) {
  if (
    cachedDb
    // cachedDb.serverConfig &&
    // cachedDb.serverConfig.isConnected()
  ) {
    console.log('Connection exist! Re-using cached DB instance');
    return Promise.resolve(cachedDb);
  }

  try {
    console.log('Connecting to DB...............................');
    const dbConnection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedDb = dbConnection;
    console.log(`DB Connection Initialized: ${cachedDb ? 'YES' : 'NO'}`);
  } catch (err) {
    throw new Error(`[MongoDB] Connection Error: ${err}`);
  }

  return cachedDb;
}

const initDb = async () => {
  await connectToDatabase(MONGODB_URI);
  return cachedDb;
};

export default initDb;
