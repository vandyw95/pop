import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';

import { DUMMY_USERS } from './__mock';

export function useUserActionEngine(initialProfiles) {
  const { push } = useRouter();
  const [users, setUsers] = useState(initialProfiles);
  const [pastUsers, setPastUsers] = useState([]);

  useEffect(() => {
    if (users.length < 3) {
      handleFetchMore();
    }
  }, [users]);

  useEffect(() => {
    if (pastUsers.length > 5) {
      const [, ...rest] = pastUsers;
      setPastUsers(rest);
    }
  }, [pastUsers]);

  const getCurrentUser = () => {
    return users[0];
  };

  const handleVisitProfile = () => {
    const { id: userId } = getCurrentUser();
    push({
      pathname: '/profile',
      query: { userId }
    });
  };

  const handleFetchMore = async () => {
    const DUMMY_RES = await fetch('https://api.github.com/repos/zeit/next.js')
      .then(res => res.json())
      .catch(console.log);
    if (!DUMMY_RES.message) {
      setUsers([...users, ...DUMMY_USERS]);
      console.log('User Fetched!', { DUMMY_USERS, DUMMY_RES });
    } else {
      console.log('User Fetch Error!', { DUMMY_USERS, DUMMY_RES });
      handleFetchMore();
    }
  };

  const handleLike = async () => {
    const [first, ...rest] = users;
    setUsers(rest);
    setPastUsers([first, ...pastUsers]);
    const DUMMY_RES = await fetch('https://api.github.com/repos/zeit/next.js')
      .then(res => res.json())
      .catch(err => {
        const rolledbackPastUsers = pastUsers.filter(
          ({ id }) => id !== first.id
        );
        setPastUsers(rolledbackPastUsers);
        console.log('Like Error!!!', { DUMMY_RES });
        return err;
      });
    console.log('Liked!!!', { DUMMY_RES });
  };

  const handleDislike = async () => {
    const [first, ...rest] = users;
    setUsers(rest);
    setPastUsers([first, ...pastUsers]);
    // const DUMMY_RES = await fetch(
    //   'https://api.github.com/repos/zeit/next.js'
    // ).then(res => res.json());
    // console.log('User disliked!', { id: first.id, DUMMY_RES });
  };

  const handleSuperLike = async () => {
    const [first, ...rest] = users;
    setUsers(rest);
    setPastUsers([first, ...pastUsers]);
    // const DUMMY_RES = await fetch(
    //   'https://api.github.com/repos/zeit/next.js'
    // ).then(res => res.json());
    // console.log('User super-liked!', { id: first.id, DUMMY_RES });
  };

  const handleRevert = async () => {
    if (pastUsers.length) {
      const [first, ...rest] = pastUsers;
      setUsers([first, ...users]);
      setPastUsers(rest);
      // const DUMMY_RES = await fetch(
      //   'https://api.github.com/repos/zeit/next.js'
      // ).then(res => res.json());
      // console.log('User Reverted!', { id: first.id, DUMMY_RES });
    }
  };

  return {
    users,
    handleVisitProfile,
    handleLike,
    handleDislike,
    handleSuperLike,
    handleRevert
  };
}
