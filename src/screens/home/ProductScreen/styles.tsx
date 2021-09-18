import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  text: {
    fontSize: 18,
  },
  container: {
    flex: 1,
  },
  bigFont: {
    padding: 2,
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    letterSpacing: 1.2,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: '100',
  },
  image: {
    width: '100%',
    height: 300,
  },

  section: {
    borderBottomWidth: 1,
    padding: 10,
    paddingLeft: 13,
  },
  important: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    textShadowRadius: 5,
    textDecorationLine: 'underline',
  },
  name: {
    justifyContent: 'center',
  },
  price: {
    fontStyle: 'italic',
    fontSize: 15,
    marginLeft: 5,
  },
});
