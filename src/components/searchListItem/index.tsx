import React from 'react';
import {View, Image, Pressable, Text} from 'react-native';
import {Movie} from '../../types/movieDb';
import Styles from './styles';

type Props = {
  movie: Movie;
  handlePress: (movieId: number) => void;
};

// Used inside the SearchList to render each movie found during the search
// the props "handleOnPress" will fetch the selected movie details, add
// them to the store and navigate to the Details screen
const SearchListItem: React.FC<Props> = ({movie, handlePress}) => {
  const handleOnPress = () => {
    handlePress(movie.id);
  };

  return (
    <Pressable style={Styles.wrapper} onPress={handleOnPress}>
      <Image source={{uri: movie.backImgPath}} style={Styles.backgroundImg} />
      <View style={Styles.txtWrapper}>
        <Text style={Styles.title}>{movie.title}</Text>
        <Text style={Styles.description} numberOfLines={3}>
          {movie.overview}
        </Text>
      </View>
    </Pressable>
  );
};

export default SearchListItem;
