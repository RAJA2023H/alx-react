import courseReducer from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('Course Reducer Tests', () => {
  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const coursesWithSelection = [
    { id: 1, name: 'ES6', credit: 60, isSelected: false },
    { id: 2, name: 'Webpack', credit: 20, isSelected: false },
    { id: 3, name: 'React', credit: 40, isSelected: false },
  ];

  it('should return the default state when no action is passed', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS correctly', () => {
    expect(
      courseReducer([], { type: FETCH_COURSE_SUCCESS, data: courses })
    ).toEqual(coursesWithSelection);
  });

  it('should handle SELECT_COURSE correctly', () => {
    const selectedState = courseReducer(coursesWithSelection, {
      type: SELECT_COURSE,
      index: 2,
    });

    expect(selectedState).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ]);
  });

  it('should handle UNSELECT_COURSE correctly', () => {
    const unselectedState = courseReducer(
      [
        { id: 1, name: 'ES6', credit: 60, isSelected: false },
        { id: 2, name: 'Webpack', credit: 20, isSelected: true },
        { id: 3, name: 'React', credit: 40, isSelected: false },
      ],
      {
        type: UNSELECT_COURSE,
        index: 2,
      }
    );

    expect(unselectedState).toEqual(coursesWithSelection);
  });
});

