import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#000033',
  },
  searchWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
    backgroundColor: '#212145',
    padding: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    color: 'white',
    backgroundColor: '#212145',
    padding: 0,
  },
  img: {
    width: 25,
    height: 25,
    tintColor: 'white',
    marginLeft: 5,
  },
});
