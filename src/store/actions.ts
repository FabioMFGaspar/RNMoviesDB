import {Movie, MovieDetails} from '../types/movieDb';
import {
  SetMovieDetails,
  SetSearchMovies,
  ClearMovieDetails,
} from '../types/store';

// pretty normal store actions here...
export const setMovieDetails = (details: MovieDetails): SetMovieDetails => ({
  type: 'SET_MOVIE_DETAILS',
  payload: details,
});

export const setSearchMovies = (movies: Movie[]): SetSearchMovies => ({
  type: 'SET_SEARCH_MOVIES',
  payload: movies,
});

export const clearMovieDetails = (): ClearMovieDetails => ({
  type: 'CLEAR_MOVIE_DETAILS',
});
