import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders a header row with one cell spanning two columns if textSecondCell is null', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header"
      />
    );
    const th = wrapper.find('th');
    expect(th).toHaveLength(1);
    expect(th.prop('colSpan')).toEqual('2');
    expect(th.text()).toEqual('Header');
    expect(wrapper.find('tr').hasClass('headerRow')).toBe(true);

  it('renders a header row with two cells if both textFirstCell and textSecondCell are provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" textSecondCell="Subheader" />);
    const ths = wrapper.find('th');
    expect(ths).toHaveLength(2);
    expect(ths.at(0).text()).toEqual('Header');
    expect(ths.at(1).text()).toEqual('Subheader');
  });
    
  it('renders a regular row with two td cells when isHeader is false', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" textSecondCell="Cell 2" />);
    const tds = wrapper.find('td');
    
    expect(tds).toHaveLength(2);
    expect(tds.at(0).text()).toEqual('Cell 1');
    expect(tds.at(1).text()).toEqual('Cell 2');
    expect(wrapper.find('tr').hasClass('defaultRow')).toBe(true);
  });
  it('renders a regular row with one cell when only textFirstCell is provided', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Cell 1" />);
    const tds = wrapper.find('td');
    
    expect(tds).toHaveLength(2);
    expect(tds.at(0).text()).toEqual('Cell 1');
    expect(tds.at(1).text()).toEqual('');
  });
});
