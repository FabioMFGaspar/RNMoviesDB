import {StoreActions, StoreState} from '../types/store';

export const initialState = {
  searchMovies: [],
  movieDetails: {},
};

// the usual store... I only needed this actions so its quite small
export default function reducers(
  state: StoreState = initialState,
  action: StoreActions,
) {
  const newState = {...state};
  switch (action.type) {
    case 'SET_SEARCH_MOVIES': {
      newState.searchMovies = action.payload;
      return newState;
    }

    case 'SET_MOVIE_DETAILS': {
      newState.movieDetails = action.payload;
      return newState;
    }

    case 'CLEAR_MOVIE_DETAILS': {
      newState.movieDetails = {};
      return newState;
    }

    default: {
      return state;
    }
  }
}
