import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {mockMovies} from '../../../mocks/movieDB.mock';
import SearchList from '..';

describe('SearchList test suite', () => {
  const mockHandle = jest.fn();
  const defaultProps = {
    hasQuery: false,
    searchMovies: mockMovies,
    handlePress: mockHandle,
  };

  it('Default snapshot test', () => {
    const {toJSON} = render(<SearchList {...defaultProps} />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should find empty component "Search for a movie"', () => {
    const {queryByText} = render(
      <SearchList {...defaultProps} searchMovies={[]} />,
    );

    const searchForMovie = queryByText('Search for a movie...');
    const noMovie = queryByText('No movies found...');

    expect(searchForMovie).toBeTruthy();
    expect(noMovie).toBeNull();
  });

  it('Should find empty component "No movies found"', () => {
    const {queryByText} = render(
      <SearchList {...defaultProps} searchMovies={[]} hasQuery />,
    );

    const searchForMovie = queryByText('Search for a movie...');
    const noMovie = queryByText('No movies found...');

    expect(noMovie).toBeTruthy();
    expect(searchForMovie).toBeNull();
  });

  it('Should find movie rendered', () => {
    const {queryAllByText, queryByText} = render(
      <SearchList {...defaultProps} />,
    );

    const movie = queryAllByText('The Avengers');
    const noMovie = queryByText('No movies found...');
    const searchForMovie = queryByText('Search for a movie...');
    // just making sure it renders the movie and not the empty components
    expect(movie).toBeTruthy();
    expect(noMovie).toBeNull();
    expect(searchForMovie).toBeNull();
  });

  it('Should trigger onPress', () => {
    const {getByText} = render(<SearchList {...defaultProps} />);

    const movie = getByText('Avengers: Age of Ultron');
    fireEvent.press(movie);

    const mockedMovie = mockMovies.find(
      eachMovie => eachMovie.title === 'Avengers: Age of Ultron',
    );

    // according with the type the var "mockedMovie" could be undefined so
    // I'm adding a ? to it to make sure it isn't
    expect(mockHandle).toHaveBeenCalledWith(mockedMovie?.id);
  });
});
