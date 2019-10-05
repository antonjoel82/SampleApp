import React from 'react';
import { shallow } from 'enzyme';

import ResourceGrid from './ResourceGrid';

describe('ResourceGrid', () => {
  it('should render correctly in "debug" mode', () => {
    const comp = shallow(<ResourceGrid resources={[]} debug />);
    expect(comp).toMatchSnapshot();
  });
  it('should work if no props are provided', () => {
    const comp = shallow(<ResourceGrid />);
    expect(comp).toMatchSnapshot();
  });
});
