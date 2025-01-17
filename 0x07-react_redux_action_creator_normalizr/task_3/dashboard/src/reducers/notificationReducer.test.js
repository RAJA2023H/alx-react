import notificationReducer from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('Notification Reducer Tests', () => {
  const notifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ];

  const initialState = {
    filter: 'DEFAULT',
    notifications: [],
  };

  it('should return the default state when no action is passed', () => {
    expect(notificationReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS correctly', () => {
    const action = { type: FETCH_NOTIFICATIONS_SUCCESS, data: notifications };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: notifications.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    };

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ correctly', () => {
    const stateWithNotifications = {
      filter: 'DEFAULT',
      notifications: notifications.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    };

    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: true },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };

    expect(notificationReducer(stateWithNotifications, action)).toEqual(
      expectedState
    );
  });

  it('should handle SET_TYPE_FILTER correctly', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: [],
    };

    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});

