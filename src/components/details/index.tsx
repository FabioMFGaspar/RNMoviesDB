import React from 'react';
import {View, Image, Text} from 'react-native';
import {MovieDetails} from '../../types/movieDb';
import DetailsInfo from '../detailsInfo';
import Styles from './styles';

type Props = {
  movieDetails: MovieDetails;
};

// This component is in charge of rendering the movie details
// it receives from props
const Details: React.FC<Props> = ({movieDetails}) => (
  <View style={Styles.screenWrapper}>
    <Image
      source={{uri: movieDetails?.posterPath}}
      style={Styles.poster}
      resizeMode="contain"
    />
    <View style={Styles.contentWrapper}>
      <View style={Styles.titleWrapper}>
        <Text style={Styles.titleText}>{movieDetails.title}</Text>
        {!!movieDetails.voteAverage && (
          <View style={Styles.scoreWrapper}>
            <Image
              source={{
                uri: 'https://img.icons8.com/fluency/48/000000/star.png',
              }}
              style={Styles.starIcon}
            />
            <Text style={Styles.scoreText}>{movieDetails.voteAverage}/10</Text>
          </View>
        )}
      </View>
      <Text style={Styles.detailsText}>{movieDetails.overview}</Text>
      <View style={Styles.separator} />
      <DetailsInfo title="Status:" info={movieDetails.status} />
      {movieDetails.status === 'Released' && (
        <DetailsInfo title="Release Date:" info={movieDetails.releaseDate} />
      )}
      {!!movieDetails.runtime && (
        <DetailsInfo title="Duration:" info={movieDetails.runtime} />
      )}
      {!!movieDetails.genres?.length && (
        <DetailsInfo title="Genre:" info={movieDetails.genres.join(', ')} />
      )}
      {!!movieDetails.budget && (
        <DetailsInfo title="Budget:" info={movieDetails.budget.toString()} />
      )}
    </View>
  </View>
);

export default Details;
