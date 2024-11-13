import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
  const [showNotifications, setShowNotifications] = useState(displayDrawer);

  return (
    <div className={css(styles.notifications)}>
      <div className={css(styles.menuItem)}>Your notifications</div>
      <button
        style={{
          color: "#3a3a3a",
          fontWeight: "bold",
          background: "none",
          border: "none",
          fontSize: "15px",
          position: "absolute",
          right: "3px",
          top: "3px",
          cursor: "pointer",
          outline: "none",
        }}
        aria-label="Close"
        onClick={(e) => {
          console.log("Close button has been clicked");
          setShowNotifications(false);
        }}
      >
        <img src={closeIcon} alt="close icon" />
      </button>
      {listNotifications.length === 0 ? (
        <p>No new notification for now</p>
      ) : (
        <ul>
          {listNotifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              type={notification.type}
              value={notification.value}
              html={notification.html}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
