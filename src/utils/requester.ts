import {Dispatch} from 'redux';
import {searchMovieByQuery, fetchMovieDetails} from '../libraries/movieDb';
import {
  setSearchMovies,
  setMovieDetails,
  clearMovieDetails,
} from '../store/actions';
import {movieFormatter, detailsFormatter} from './formatter';

// Maybe this isn't the best name for the file...
// This functions are responsible for getting information from
// the MovieDB library, formatting it and dispatching it to the store
// be it the movies list in the search bar or the movie details for the
// details page
export const findMovieByQuery = async ({
  query,
  dispatch,
}: {
  query: string;
  dispatch: Dispatch;
}) => {
  const {results} = await searchMovieByQuery(query);

  if (results) {
    const formattedMovies = movieFormatter(results);
    dispatch(setSearchMovies(formattedMovies));
  } else {
    dispatch(setSearchMovies([]));
  }
};

export const getMovieById = async ({
  movieId,
  dispatch,
}: {
  movieId: number;
  dispatch: Dispatch;
}) => {
  const result = await fetchMovieDetails(movieId);

  if (Object.keys(result).length) {
    const formattedDetails = detailsFormatter(result);
    dispatch(setMovieDetails(formattedDetails));
  } else {
    dispatch(clearMovieDetails());
  }
};
