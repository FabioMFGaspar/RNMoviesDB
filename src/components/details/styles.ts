import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screenWrapper: {
    backgroundColor: '#000033',
    display: 'flex',
    flex: 1,
  },
  poster: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
  contentWrapper: {
    padding: 15,
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  scoreWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    color: 'white',
  },
  detailsText: {
    color: '#8c8c8c',
    fontSize: 12,
    marginTop: 10,
  },
  starIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  separator: {
    borderTopWidth: 1,
    borderTopColor: '#8c8c8c',
    marginVertical: 10,
    flex: 1,
  },
});
