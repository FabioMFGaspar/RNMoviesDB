import React from 'react';
import {useSelector} from 'react-redux';
import {StoreState} from '../../types/store';
import {MovieDetails} from '../../types/movieDb';
import Details from '../../components/details';

// This component fetches the movie details from the store and
// passes it to the Details component
const DetailsScreen: React.FC = () => {
  const movieDetails = useSelector(
    (state: StoreState) => state.movieDetails,
  ) as MovieDetails;

  return <Details movieDetails={movieDetails} />;
};

export default DetailsScreen;
