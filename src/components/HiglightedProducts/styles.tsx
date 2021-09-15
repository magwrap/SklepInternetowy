import {StyleSheet} from 'react-native';
import {Colors} from '@/config/Colors';

export const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 13,
    color: Colors.blue,
    textDecorationLine: 'underline',
    padding: 5,
    marginRight: 10,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  bigText: {
    fontSize: 20,
    color: Colors.black,
    textAlign: 'center',
  },
});
