import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  bigText: {
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },

  info: {
    flexDirection: 'column',
  },
});
