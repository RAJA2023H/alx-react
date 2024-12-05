import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';
import { fromJS } from 'immutable';

describe('Notification Selectors', () => {
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
      2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: true },
      3: { id: 3, type: 'default', value: 'Notification 3', isRead: false },
    },
  });

  it('filterTypeSelected should return the filter value', () => {
    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const expectedNotifications = fromJS({
      1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
      2: { id: 2, type: 'urgent', value: 'Notification 2', isRead: true },
      3: { id: 3, type: 'default', value: 'Notification 3', isRead: false },
    });
    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  it('getUnreadNotifications should return a list of unread notifications', () => {
    const expectedUnread = fromJS({
      1: { id: 1, type: 'default', value: 'Notification 1', isRead: false },
      3: { id: 3, type: 'default', value: 'Notification 3', isRead: false },
    });
    expect(getUnreadNotifications(state)).toEqual(expectedUnread);
  });
});
