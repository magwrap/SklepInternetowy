import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  table: {
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    minHeight: 30,
    padding: 5,
    margin: 1,
  },
  evenItem: {
    backgroundColor: Colors.thinYellow,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
    width: '50%',
  },
  textKey: {
    fontWeight: 'bold',
  },
});
