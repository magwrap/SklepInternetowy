import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 7,
    padding: 15,
    margin: 5,
  },

  inputField: {
    marginLeft: 10,
    marginRight: 10,
  },

  input: {
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 20,
    backgroundColor: Colors.realWhite,
  },

  label: {
    padding: 2,
    marginLeft: 5,
    fontWeight: '100',
  },
});
