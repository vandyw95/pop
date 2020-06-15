import db from '../db';

export default (_, { id }) => {
  console.log('=====Querying for "author"=====', id);
  console.log(db);
  const author = db.authors.find(({ id }) => id === id);
  console.log('=====Results for "author"=====', author);
  return author;
};
