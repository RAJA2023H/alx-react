import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should have default displayDrawer state as false', () => {
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('handleDisplayDrawer should set displayDrawer to true', () => {
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it('handleHideDrawer should set displayDrawer to false', () => {
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
