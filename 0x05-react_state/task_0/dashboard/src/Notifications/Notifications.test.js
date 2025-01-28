import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

describe('Notifications Component tests', () => {
  let wrapper;
  const handleDisplayDrawer = jest.fn();
  const handleHideDrawer = jest.fn();

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
    wrapper = shallow(
      <Notifications 
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
        handleHideDrawer={handleHideDrawer}
      />
    );
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    jest.clearAllMocks();
  });

  it('clicking on menu item calls handleDisplayDrawer', () => {
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  it('clicking on close button calls handleHideDrawer', () => {
    wrapper.setProps({ displayDrawer: true });
    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
