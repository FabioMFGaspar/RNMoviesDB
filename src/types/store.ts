import {Movie, MovieDetails} from './movieDb';

// Actions Types
export type StoreActions =
  | SetMovieDetails
  | SetSearchMovies
  | ClearMovieDetails;

export type SetMovieDetails = {
  type: 'SET_MOVIE_DETAILS';
  payload: MovieDetails;
};

export type SetSearchMovies = {
  type: 'SET_SEARCH_MOVIES';
  payload: Movie[];
};

export type ClearMovieDetails = {
  type: 'CLEAR_MOVIE_DETAILS';
};

// Reducer Types
export interface StoreState {
  searchMovies: Movie[];
  movieDetails: MovieDetails | {};
}
