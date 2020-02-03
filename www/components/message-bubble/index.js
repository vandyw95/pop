import PropTypes from 'prop-types';

import { MessageBubble, MessageText, CreatedAt } from './styles';

function MessageBubble({ message, createdAt }) {
  return (
    <MessageBubble>
      <MessageText>{message}</MessageText>
      <CreatedAt>{createdAt}</CreatedAt>
    </MessageBubble>
  );
}

MessageBubble.propTypes = {
  message: PropTypes.string,
  createdAt: PropTypes.string,
};

MessageBubble.defaultProps = {
  message: '',
  createdAt: new Date(),
};

export default MessageBubble;
