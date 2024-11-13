import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

class NotificationItems extends React.Component {
  render () {
    return (
      <li
        className={css(styles.notificationItem, type === 'urgent' && styles.urgent)}
        data-notification-type={type}
        dangerouslySetInnerHTML={html ? { __html: html } : null}
      >
        {!html && value}
      </li>
    );
  }
}
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

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItems.defaultProps = {
  type: 'default',
};

export default NotificationItem;
