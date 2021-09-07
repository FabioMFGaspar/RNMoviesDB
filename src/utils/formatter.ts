import {RawMovie, Movie, RawMovieDetails, MovieDetails} from '../types/movieDb';

/**
 * movieFormatter
 *
 * @param rawMovies - Response from the MovieAPI with the searched movies
 * @returns Formatted movies list used in the app
 */
export const movieFormatter = (rawMovies: RawMovie[]): Movie[] =>
  rawMovies.map((eachMovie: RawMovie) => ({
    backImgPath: `https://image.tmdb.org/t/p/w400${eachMovie.backdrop_path}`,
    title: eachMovie.title,
    id: eachMovie.id,
    overview: eachMovie.overview,
  }));

/**
 * detailsFormatter
 *
 * @param rawDetails - Response from the MovieAPI with the movie details
 * @returns Formatted movie details used in the app
 */
export const detailsFormatter = (rawDetails: RawMovieDetails): MovieDetails => {
  const budget = rawDetails.budget
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(rawDetails.budget)
    : '';

  const runtime = rawDetails.runtime
    ? `${Math.floor(rawDetails.runtime / 60)}h ${rawDetails.runtime % 60}m`
    : '';

  return {
    title: rawDetails.title,
    id: rawDetails.id,
    overview: rawDetails.overview,
    genres: rawDetails.genres.map(eachGenre => eachGenre.name),
    posterPath: `https://image.tmdb.org/t/p/w200${rawDetails.poster_path}`,
    runtime,
    releaseDate: rawDetails.release_date,
    voteAverage: rawDetails.vote_average,
    budget,
    status: rawDetails.status,
  };
};
