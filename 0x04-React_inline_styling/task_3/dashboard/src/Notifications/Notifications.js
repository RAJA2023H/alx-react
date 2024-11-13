import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import * as Utils from '../utils';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.menuItems)}>Your notifications</div>
        {this.props.displayDrawer && (
          <div className={css(styles.notifications)}>
            <button
              ariaLabel = "Close"
	      onClick={() => console.log('Close button has been clicked')}
	    >
	      x
	    </button>
            <pclassName={css(styles.notificationText)}>Here is the list of notifications</p>
            <ulclassName={css(styles.notificationList)}>
              <NotificationItem markAsRead={this.markAsRead} id='1' type="default" value="New course available" />
              <NotificationItem markAsRead={this.markAsRead} id='2' type="urgent" value="New resume available" />
              <NotificationItem markAsRead={this.markAsRead} id='3' type="urgent" value="" html={Utils.getLatestNotification()} />
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menuItems: {
    fontSize: '18px',
    padding: '10px',
  },
  notifications: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    zIndex: 10,
    padding: 0,
    fontSize: '20px',
    '@media (max-width: 900px)': {
      fontSize: '16px',
    },
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '20px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  notificationText: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  notificationList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
});

export default Notifications;
