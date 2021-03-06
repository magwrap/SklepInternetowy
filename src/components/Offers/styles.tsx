import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bigText: {
    fontSize: 30,
    textAlign: 'center',
  },
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
  promotion: {
    color: Colors.green,
  },
});
