import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {mockMovies} from '../../../mocks/movieDB.mock';
import SearchListItem from '..';

describe('SearchListItem test suite', () => {
  const mockHandle = jest.fn();
  const defaultProps = {
    movie: mockMovies[0],
    handlePress: mockHandle,
  };

  it('Default snapshot test', () => {
    const {toJSON} = render(<SearchListItem {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should find movie title', () => {
    const {queryByText} = render(<SearchListItem {...defaultProps} />);

    const movie = queryByText('The Avengers');

    expect(movie).toBeTruthy();
  });

  it('Should trigger onPress', () => {
    const {getByText} = render(<SearchListItem {...defaultProps} />);

    const movie = getByText('The Avengers');
    fireEvent.press(movie);

    expect(mockHandle).toHaveBeenCalledWith(defaultProps.movie.id);
  });
});
