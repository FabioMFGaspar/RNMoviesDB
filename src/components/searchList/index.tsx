import React from 'react';
import {View, FlatList, Text} from 'react-native';
import SearchListItem from '../searchListItem';
import {Movie} from '../../types/movieDb';
import Styles from './styles';

type Props = {
  hasQuery: boolean;
  searchMovies: Movie[];
  handlePress: (movieId: number) => void;
};

// Component used to render the movies that were fetched during the search
// The empty component text changes to give a different feedback when
// we haven't searched and when the search didn't found any movie
const SearchList: React.FC<Props> = ({hasQuery, searchMovies, handlePress}) => (
  <FlatList
    data={searchMovies}
    ListEmptyComponent={() => (
      <View style={Styles.emptyComponentWrapper}>
        <Text style={Styles.emptyComponentText}>
          {hasQuery ? 'No movies found...' : 'Search for a movie...'}
        </Text>
      </View>
    )}
    ItemSeparatorComponent={() => <View style={Styles.itemSeparator} />}
    renderItem={item => (
      <SearchListItem
        key={item.item.id}
        movie={item.item}
        handlePress={handlePress}
      />
    )}
  />
);

export default SearchList;
