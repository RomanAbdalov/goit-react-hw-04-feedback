import PropTypes from 'prop-types';
import { Text } from './Notifications.styled';

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
