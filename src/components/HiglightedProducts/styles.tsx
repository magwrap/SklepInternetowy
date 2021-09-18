import {StyleSheet} from 'react-native';
import {Colors} from '@/config/Colors';

export const styles = StyleSheet.create({
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
    color: Colors.black,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5,
  },
});
