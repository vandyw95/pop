import PropTypes from 'prop-types';

import { MessageCard, ProfileImage, Name, LastMessage, SendTime } from './styles';

function MessageCard({ sender, lastMessage, handleClick }) {
  const { id, name, coverImageUrl } = sender;
  const { message, createdAt } = lastMessage;

  return (
    <MessageCard
      onClick={() => {
        handleClick(id);
      }}
    >
      <ProfileImage src={coverImageUrl} />
      <Name>{name}</Name>
      <LastMessage>{message}</LastMessage>
      <SendTime>{createdAt}</SendTime>
    </MessageCard>
  );
}

MessageCard.propTypes = {
  sender: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    coverImageUrl: PropTypes.string,
  }).isRequired,
  lastMessage: PropTypes.shape({
    message: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  handleClick: PropTypes.func,
};

MessageCard.defaultProps = {
  sender: {
    coverImageUrl: '',
  },
  handleClick: () => {
    console.log('No click handler passed to MessageCard!');
  },
};

export default MessageCard;
