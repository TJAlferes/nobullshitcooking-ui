import { mount } from 'enzyme';
import React from 'react';

import ExpandCollapseView from './ExpandCollapseView';

import ExpandCollapse from './ExpandCollapse';

describe('ExpandCollapse', () => {
  it('expands and collapses', () => {
    const wrapper = mount(
      <ExpandCollapse
        children="Howdy!"
        headingWhileCollapsed="Click Here To Expand"
        headingWhileExpanded="Click Here To Collapse"
      />
    );

    wrapper.find('[data-test="expand"]').simulate('click');

    expect(wrapper.find(ExpandCollapseView).props().expanded).toEqual(true);

    wrapper.find('[data-test="collapse"]').simulate('click');

    expect(wrapper.find(ExpandCollapseView).props().expanded).toEqual(false);
  });
});