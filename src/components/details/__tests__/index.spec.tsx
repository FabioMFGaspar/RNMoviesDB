import React from 'react';
import {render} from '@testing-library/react-native';
import Details from '..';
import {mockDetail} from '../../../mocks/movieDB.mock';

describe('Details test suite', () => {
  it('Default snapshot test', () => {
    const {toJSON} = render(<Details movieDetails={mockDetail} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should not render score', () => {
    const {queryByText} = render(
      <Details movieDetails={{...mockDetail, voteAverage: 0}} />,
    );

    const comp = queryByText(/[0,9]*\/10/);
    expect(comp).toBeNull();
  });

  it('Should not render release date', () => {
    const {queryByText} = render(
      <Details movieDetails={{...mockDetail, status: 'Canceled'}} />,
    );

    const comp = queryByText('Release Date:');
    expect(comp).toBeNull();
  });

  it('Should not render duration', () => {
    const {queryByText} = render(
      <Details movieDetails={{...mockDetail, runtime: ''}} />,
    );

    const comp = queryByText('Duration:');
    expect(comp).toBeNull();
  });

  it('Should not render genres', () => {
    const {queryByText} = render(
      <Details movieDetails={{...mockDetail, genres: []}} />,
    );

    const comp = queryByText('Genre:');
    expect(comp).toBeNull();
  });

  it('Should not render budget', () => {
    const {queryByText} = render(
      <Details movieDetails={{...mockDetail, budget: ''}} />,
    );

    const comp = queryByText('Budget:');
    expect(comp).toBeNull();
  });
});
