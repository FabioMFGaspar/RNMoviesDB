import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../../components/searchBar';
import SearchList from '../../components/searchList';
import {findMovieByQuery, getMovieById} from '../../utils/requester';
import {StoreState} from '../../types/store';
import Styles from '../styles';

// This is the component with more logic in the entire app
// It renders both the SearchBar and the SearchList and
// is in charge of owning the states and handles used
// in those components
const SearchScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const searchMovies = useSelector((state: StoreState) => state.searchMovies);
  // I decided to go with useState for the search bar input instead of
  // adding it to the store, I think its something that should be owned
  // by the component itself and not shared with others
  const [query, setQuery] = React.useState('');

  // this small function is called when we type anything inside the search bar
  // it will update the state with the new text, search for the movie in the API
  // and also update the store with the movies list
  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);

    await findMovieByQuery({query: searchQuery, dispatch});
  };

  // this function is called whenever we touch a movie inside the SearchList
  // it will fetch that movie information from the API, set it in the store
  // and navigate to the Details page
  const handleMoviePress = async (movieId: number) => {
    await getMovieById({movieId, dispatch});
    // this is how we navigate and pass params according to the documentation
    // but ts doesn't like it so I'm adding an ignore here
    // @ts-ignore
    navigation.navigate('Details');
  };

  return (
    <View style={Styles.screenWrapper}>
      <SearchBar query={query} handleSearch={handleSearch} />
      <SearchList
        hasQuery={query.trim().length > 0}
        searchMovies={searchMovies}
        handlePress={handleMoviePress}
      />
    </View>
  );
};

export default SearchScreen;
