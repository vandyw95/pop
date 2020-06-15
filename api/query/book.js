import db from '../db';

export default (_, { id }) => {
  console.log('=====Querying for "book"=====', id);
  console.log(db);
  const book = db.books.find(({ id }) => id === id);
  console.log('=====Results for "book"=====', book);
  return book;
};
