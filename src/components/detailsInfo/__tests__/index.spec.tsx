import React from 'react';
import {render} from '@testing-library/react-native';
import DetailsInfo from '..';

describe('DetailsInfo test suite', () => {
  it('Default snapshot test', () => {
    const {toJSON} = render(
      <DetailsInfo title="dummyTitle" info="dummyOverview" />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should render title and overview', () => {
    const {queryByText} = render(
      <DetailsInfo title="dummyTitle" info="dummyOverview" />,
    );

    const title = queryByText('dummyTitle');
    const overview = queryByText('dummyOverview');

    expect(title).toBeTruthy();
    expect(overview).toBeTruthy();
  });
});
