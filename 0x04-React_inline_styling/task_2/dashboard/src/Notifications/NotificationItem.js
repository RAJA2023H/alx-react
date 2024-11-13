import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


class NotificationItems extends React.Component {
  render () {
    const { type, value, html, markAsRead, id } = this.props;
    return (
      <li
        data-notification-type={type}
	sName={css(type === 'urgent' ? styles.urgent : styles.default)}
        onClick={() => markAsRead(id)}
	dangerouslySetInnerHTML={html ? { __html: html } : undefined}
      >
        {!html && value}
      </li>
    );
  }
}

NotificationItems.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func
  id: PropTypes.number,
  
}

NotificationItems.default = {
  type: 'default',
  markAsRead: 0
}
const styles = StyleSheet.create({
  default: {
    color: '#1d1d1d',
    fontSize: '14px',
    padding: '10px',
  },
  urgent: {
    color: '#ff0000',
    fontSize: '14px',
    fontWeight: 'bold',
    padding: '10px',
  },
});
export default NotificationItems;
