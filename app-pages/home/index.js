import fetch from 'isomorphic-unfetch';

import ProfileCard from 'profile-card';

import { useUserActionEngine } from './helpers';

import { DUMMY_USERS, DUMMY_PROFILE } from './__mock.js';

import { PageWrapper } from './styles';

function Home({ initialProfiles }) {
  const {
    users,
    handleVisitProfile,
    handleLike,
    handleDislike,
    handleSuperLike,
    handleRevert
  } = useUserActionEngine(initialProfiles);

  console.log(users);

  return (
    <PageWrapper>
      {users.map(
        ({ id, name }, index) =>
          index < 2 && (
            <ProfileCard
              key={id}
              isOnTop={index === 0}
              images={DUMMY_PROFILE.images}
              name={DUMMY_PROFILE.name}
              description={DUMMY_PROFILE.description}
              handleVisitProfile={handleVisitProfile}
              handleLike={handleLike}
              handleDislike={handleDislike}
              handleSuperLike={handleSuperLike}
              handleRevert={handleRevert}
            />
          )
      )}
    </PageWrapper>
  );
}

Home.getInitialProps = async () => {
  // const res = await fetch('https://api.github.com/repos/zeit/next.js');
  return { initialProfiles: DUMMY_USERS };
};

export default Home;
