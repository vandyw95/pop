import db from '../db';

export default () => {
  console.log('=====Querying for "books"=====');
  console.log(db);
  console.log('=====Results for "books"=====', db.books);
  return db.books;
};
