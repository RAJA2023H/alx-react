import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.Component {
  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <li
        className={css(
          styles.notificationItem,
          type === 'urgent' && styles.urgent
        )}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: html } : null}
        onClick={() => markAsRead(id)}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

const styles = StyleSheet.create({
  notificationItem: {
    width: '100%',
    padding: '10px 8px',
    fontSize: '20px',
    borderBottom: '1px solid black',
  },
  urgent: {
    color: 'red',
  },
});

export default NotificationItem;

