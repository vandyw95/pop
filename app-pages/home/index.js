import React from 'react';
import { message } from 'antd';

import { Title, Button } from './styles';

const handleClick = () => {
  message.info('You clicked me!');
};

function Home() {
  return (
    <>
      <Title>{'Home page'}</Title>
      <Button onClick={handleClick}>{'Click me'}</Button>
    </>
  );
}

export default Home;
