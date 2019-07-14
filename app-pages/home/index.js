import React from 'react';
import Link from 'next/link';

import { Title, Button } from './styles';

function Home() {
  return (
    <>
      <Title>{'Home page'}</Title>
      <Link href={{ pathname: '/profile', query: { userId: '123' } }}>
        <Button>{'Click me'}</Button>
      </Link>
    </>
  );
}

export default Home;
