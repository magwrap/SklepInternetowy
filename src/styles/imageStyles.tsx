import {Platform, StyleSheet} from 'react-native';

export const imageStyles = StyleSheet.create({
  imageContainer: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 10,
      },
    }),
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
});
