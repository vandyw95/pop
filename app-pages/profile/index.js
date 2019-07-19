import React from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { message } from 'antd';

import { DUMMY_PROFILE } from './__mock';

import { Title, Button } from './styles';

const handleClick = () => {
  message.info('You clicked me!');
};

function Profile({ stars }) {
  const { query } = useRouter();
  const { userId } = query;

  return (
    <>
      <Title>
        {'Profile'}
        {userId}
        {stars}
      </Title>
      <Button onClick={handleClick}>{'Click me'}</Button>
    </>
  );
}

Profile.getInitialProps = async ({ query }) => {
  const { userId } = query;
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const json = await res.json();
  return { ...DUMMY_PROFILE, userId, stars: json.stargazers_count };
};

export default Profile;
