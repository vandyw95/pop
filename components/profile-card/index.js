import PropTypes from 'prop-types';

import { Card, CardImage, CardIconButton, CardMeta } from './styles';

function ProfileCard({
  isOnTop,
  images,
  name,
  description,
  handleVisitProfile,
  handleLike,
  handleSuperLike,
  handleDislike,
  handleRevert
}) {
  return (
    <Card
      hoverable
      isOnTop={isOnTop}
      cover={
        <CardImage alt="profile picture" src={images.length && images[0].url} />
      }
      actions={[
        <CardIconButton icon="undo" onClick={handleRevert} />,
        <CardIconButton icon="meh" onClick={handleDislike} />,
        <CardIconButton icon="rocket" onClick={handleSuperLike} />,
        <CardIconButton icon="heart" onClick={handleLike} />
      ]}
    >
      <CardMeta
        title={name}
        description={description}
        onClick={handleVisitProfile}
      />
    </Card>
  );
}

ProfileCard.propTypes = {
  isOnTop: PropTypes.bool,
  images: PropTypes.array,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  handleVisitProfile: PropTypes.func.isRequired,
  handleLike: PropTypes.func.isRequired,
  handleSuperLike: PropTypes.func.isRequired,
  handleDislike: PropTypes.func.isRequired,
  handleRevert: PropTypes.func.isRequired
};

ProfileCard.defaultProps = {
  isOnTop: false,
  images: [],
  description: ''
};

export default ProfileCard;
