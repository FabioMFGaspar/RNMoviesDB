import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    backgroundColor: '#2b2b3b',
    marginHorizontal: 15,
    borderRadius: 10,
  },
  backgroundImg: {
    width: 360,
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  txtWrapper: {
    padding: 10,
  },
  title: {
    color: '#e6e6ff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    color: '#8c8c8c',
    fontSize: 12,
  },
});
