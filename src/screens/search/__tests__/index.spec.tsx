import React from 'react';
import {fireEvent} from '@testing-library/react-native';
import {renderWithRedux} from '../../../utils/testUtils';
import {findMovieByQuery, getMovieById} from '../../../utils/requester';
import Search from '..';
import {mockMovies} from '../../../mocks/movieDB.mock';

jest.mock('@react-navigation/native');
jest.mock('../../../utils/requester', () => ({
  findMovieByQuery: jest.fn(),
  getMovieById: jest.fn(),
}));


describe('Search Screen test suite', () => {
  it('Search snapshot test', () => {
    const {toJSON} = renderWithRedux(<Search />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('Snapshot with movie list', () => {
    const {toJSON} = renderWithRedux(<Search />, {
      searchMovies: mockMovies,
      movieDetails: {},
    });
    expect(toJSON()).toMatchSnapshot();
  });

  it('Should find the movie in the list', () => {
    const {queryAllByText, queryByText} = renderWithRedux(<Search />, {
      searchMovies: mockMovies,
      movieDetails: {},
    });

    const movie = queryAllByText('The Avengers');
    const noMovie = queryByText('No movies found...');
    const searchForMovie = queryByText('Search for a movie...');

    expect(movie).toBeTruthy();
    expect(noMovie).toBeNull();
    expect(searchForMovie).toBeNull();
  });

  it('Should find the empty component', () => {
    const {queryByText} = renderWithRedux(<Search />, {
      searchMovies: [],
      movieDetails: {},
    });

    const noMovie = queryByText('No movies found...');
    const searchForMovie = queryByText('Search for a movie...');

    expect(noMovie).toBeNull();
    expect(searchForMovie).toBeTruthy();
  });

  it('Should trigger onChangeText', () => {
    const mockHandle = jest.fn();
    // @ts-ignore
    findMovieByQuery.mockImplementation(mockHandle);
    const {getByPlaceholderText} = renderWithRedux(<Search />, {
      searchMovies: mockMovies,
      movieDetails: {},
    });

    fireEvent(getByPlaceholderText('Search...'), 'onChangeText', 'dummyChange');
    expect(mockHandle).toHaveBeenCalled();
  });

  it('Should trigger movie onPress', () => {
    const mockHandle = jest.fn();
    // @ts-ignore
    getMovieById.mockImplementation(mockHandle);
    const {getByText} = renderWithRedux(<Search />, {
      searchMovies: mockMovies,
      movieDetails: {},
    });

    const movie = getByText('Avengers: Age of Ultron');
    fireEvent.press(movie);

    expect(mockHandle).toHaveBeenCalled();
  });
});
