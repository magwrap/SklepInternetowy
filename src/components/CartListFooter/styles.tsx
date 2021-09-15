import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    padding: 10,
  },
  container: {
    height: 75,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  delete: {
    color: 'red',
    fontWeight: 'bold',
    textShadowRadius: 2,
  },
  price: {
    fontStyle: 'italic',
    textDecorationStyle: 'dotted',
    textShadowColor: 'black',
    textShadowRadius: 2,
    marginTop: 15,
    marginRight: 43,
  },
});
