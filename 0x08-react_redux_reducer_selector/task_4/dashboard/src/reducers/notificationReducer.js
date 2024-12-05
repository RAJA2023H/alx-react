import { Map } from 'immutable';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  filter: 'DEFAULT',
  notifications: Map(),
});

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge({
        notifications: Map(notificationsNormalizer(action.data)),
      });

    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);

    case MARK_AS_READ:
      return state.setIn(['notifications', String(action.index), 'isRead'], true);

    default:
      return state;
  }
};

export default notificationReducer;

