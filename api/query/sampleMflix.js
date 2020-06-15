import db from '../db';

export default (parent, args, context) => {
  console.log('=====Querying for "sayHello"=====', id);
  console.log(db);
  const sayHello = 'Hello World!';
  console.log('=====Results for "sayHello"=====', sayHello);
  return sayHello;
};
