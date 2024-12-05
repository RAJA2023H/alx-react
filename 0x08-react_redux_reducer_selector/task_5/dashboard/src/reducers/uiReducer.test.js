import { Map } from 'immutable';
import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { SELECT_COURSE } from '../actions/courseActionTypes';

describe('tests for uiReducer', () => {
  const defaultState = Map({
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  });

  it('should return the initial state when no action is passed', () => {
    expect(uiReducer(defaultState, 'null').toJS()).toEqual(defaultState.toJS());
  });

  it('should return the initial state when a wrong action is passed', () => {
    expect(uiReducer(defaultState, { type: SELECT_COURSE }).toJS()).toEqual(
      defaultState.toJS()
    );
  });

  it('should change state correctly when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    expect(
      uiReducer(defaultState, { type: DISPLAY_NOTIFICATION_DRAWER }).toJS()
    ).toEqual({ ...defaultState.toJS(), isNotificationDrawerVisible: true });
  });
});
