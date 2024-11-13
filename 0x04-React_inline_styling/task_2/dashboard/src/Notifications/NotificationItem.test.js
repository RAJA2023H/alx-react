import React from 'react';
import { shallow } from 'enzyme';
import NotificationItems from './NotificationItem';

describe('Notification item tests', () => {
  it('test notification item on click', () => {
    const onclick = jest.fn();
    
    const wrapper = shallow(<NotificationItems markAsRead={onclick} id='1' />);
    wrapper.find('li').simulate('click');
    expect(onclick).toHaveBeenCalledWith(1);
  })
  it('should apply urgent style when type is urgent', () => {
    const wrapper = shallow(<NotificationItems type="urgent" />);
    expect(wrapper.find('li').hasClass('urgent')).toBe(true);
  });
})
