import React from 'react';
import {renderWithRedux} from '../../../utils/testUtils';
import Details from '..';
import {mockDetail} from '../../../mocks/movieDB.mock';

describe('Details Screen test suite', () => {
  it('Default snapshot test', () => {
    const {toJSON} = renderWithRedux(<Details />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Snapshot with movie details', () => {
    const {toJSON} = renderWithRedux(<Details />, {
      searchMovies: [],
      movieDetails: mockDetail,
    });
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should find Status info', () => {
    const {queryByText} = renderWithRedux(<Details />, {
      searchMovies: [],
      movieDetails: mockDetail,
    });

    const status = queryByText('Status:');
    expect(status).toBeTruthy();
  });

  it('Should not find Status info without :', () => {
    const {queryByText} = renderWithRedux(<Details />, {
      searchMovies: [],
      movieDetails: mockDetail,
    });

    const status = queryByText('Status');
    expect(status).toBeNull();
  });
});
