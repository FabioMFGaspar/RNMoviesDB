import React from 'react';
import {View, Image, TextInput} from 'react-native';
import Styles from './styles';

type Props = {
  query: string;
  handleSearch: (text: string) => void;
};

// Main search bar components, it uses the "handleSearch" prop to
// search movies in MovieDB API and set the input query value
const SearchBar: React.FC<Props> = ({query, handleSearch}) => (
  <View style={Styles.mainWrapper}>
    <View style={Styles.searchWrapper}>
      <TextInput
        style={Styles.input}
        onChangeText={handleSearch}
        value={query}
        placeholder="Search..."
        placeholderTextColor="white"
      />
      <Image
        source={{
          uri: 'https://img.icons8.com/ios-glyphs/30/000000/search--v2.png',
        }}
        style={Styles.img}
      />
    </View>
  </View>
);

export default SearchBar;
