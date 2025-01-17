import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fromJS } from 'immutable';

describe('Course Reducer', () => {
  const courses = [
    { id: 1, name: 'Course 1', isSelected: false },
    { id: 2, name: 'Course 2', isSelected: false },
    { id: 3, name: 'Course 3', isSelected: false },
  ];

  it('should handle FETCH_COURSE_SUCCESS correctly', () => {
    const action = { type: FETCH_COURSE_SUCCESS, data: courses };
    const normalizedCourses = fromJS({
      1: { id: 1, name: 'Course 1', isSelected: false },
      2: { id: 2, name: 'Course 2', isSelected: false },
      3: { id: 3, name: 'Course 3', isSelected: false },
    });

    expect(courseReducer(undefined, action)).toEqual(normalizedCourses);
  });

  it('should handle SELECT_COURSE correctly', () => {
    const state = fromJS({
      1: { id: 1, name: 'Course 1', isSelected: false },
      2: { id: 2, name: 'Course 2', isSelected: false },
    });
    const action = { type: SELECT_COURSE, index: 1 };
    const expectedState = state.setIn(['1', 'isSelected'], true);

    expect(courseReducer(state, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE correctly', () => {
    const state = fromJS({
      1: { id: 1, name: 'Course 1', isSelected: true },
      2: { id: 2, name: 'Course 2', isSelected: false },
    });
    const action = { type: UNSELECT_COURSE, index: 1 };
    const expectedState = state.setIn(['1', 'isSelected'], false);

    expect(courseReducer(state, action)).toEqual(expectedState);
  });
});
