// in a normal application this value would never be placed here
// it need to be saved outside the app, especially when it appears in the bitbucket repo
const apiKey = '9d2fb9c3d387904d9c71a83ee6735787';

/**
 * searchMovieByQuery
 * Search for any given movie name in the MovieDB API and returns the response
 * @param movieName - Movie name to search in the API
 * @returns Parsed response from the API
 */
export const searchMovieByQuery = async (movieName: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURI(
        movieName,
      )}&page=1&include_adult=false`,
    );
    const movies = await response.json();

    return movies;
  } catch (error) {
    console.error('MovieDB searchMovieByQuery error', error);
  }
};

/**
 * fetchMovieDetails
 * Fetches the movie details for the given ID from the MovieDB API and returns the response
 * @param movieId - ID for the movie that we need the details
 * @returns Parsed response from the API
 */
export const fetchMovieDetails = async (movieId: number) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
    );
    const movieInfo = await response.json();

    return movieInfo;
  } catch (error) {
    console.error('MovieDB fetchMovieDetails error', error);
  }
};
