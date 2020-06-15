import { ObjectId } from 'mongodb';
import initDb from '../db';

export async function addUser(_, { name, email, age, description }) {
  const db = await initDb();

  const user = await db
    .db('try_atlas')
    .collection('users')
    .insertOne({
      name,
      email,
      age,
      description,
    })
    .then(console.log);

  // console.log('Added: ', user);

  return user;
}

export async function getUser(_, { id }) {
  const db = await initDb();

  const user = await db
    .db('try_atlas')
    .collection('users')
    .findOne({ _id: ObjectId(id) });

  return user;
}
