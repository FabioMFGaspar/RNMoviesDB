import {mockMovies, mockDetail} from '../../mocks/movieDB.mock';
import reducer, {initialState} from '../reducers';
import {setMovieDetails, setSearchMovies, clearMovieDetails} from '../actions';

describe('Store test suite', () => {
  it('Should return the initial state', () => {
    // @ts-ignore
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('Should set new movies', () => {
    const prevState = initialState;

    expect(reducer(prevState, setSearchMovies(mockMovies))).toEqual({
      ...initialState,
      searchMovies: mockMovies,
    });
  });

  it('Should set new movie details', () => {
    const prevState = initialState;

    expect(reducer(prevState, setMovieDetails(mockDetail))).toEqual({
      ...initialState,
      movieDetails: mockDetail,
    });
  });

  it('Should clear movie details', () => {
    const prevState = {
      ...initialState,
      movieDetails: mockDetail,
    };

    expect(reducer(prevState, clearMovieDetails())).toEqual({
      ...initialState,
      movieDetails: {},
    });
  });
});
