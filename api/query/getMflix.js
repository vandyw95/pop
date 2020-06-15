import initDb from '../db';

async function getMflix(parent, args, context) {
  const db = await initDb();

  const users = await db
    .db('sample_mflix')
    .collection('users')
    .find({})
    .toArray();

  const movies = await db
    .db('sample_mflix')
    .collection('movies')
    .find({})
    .toArray();

  return {
    movies,
    users,
  };
}

export default getMflix;
