import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { fromJS } from 'immutable';

describe('Notification Reducer', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available', isRead: false },
    { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
  ];

  it('should handle FETCH_NOTIFICATIONS_SUCCESS correctly', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    const normalizedNotifications = fromJS({
      1: { id: 1, type: 'default', value: 'New course available', isRead: false },
      2: { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
    });

    const expectedState = fromJS({
      filter: 'DEFAULT',
      notifications: normalizedNotifications,
    });

    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER correctly', () => {
    const state = fromJS({
      filter: 'DEFAULT',
      notifications: {},
    });
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = state.set('filter', 'URGENT');

    expect(notificationReducer(state, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ correctly', () => {
    const state = fromJS({
      filter: 'DEFAULT',
      notifications: {
        1: { id: 1, isRead: false, type: 'default', value: 'Notification 1' },
      },
    });
    const action = { type: MARK_AS_READ, index: 1 };
    const expectedState = state.setIn(['notifications', '1', 'isRead'], true);

    expect(notificationReducer(state, action)).toEqual(expectedState);
  });
});
