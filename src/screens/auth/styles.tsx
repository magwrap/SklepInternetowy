import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  fields: {},
  buttons: {},
  header: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
  },
  button: {
    borderWidth: 2,
    borderRadius: 7,
    padding: 15,
    margin: 5,
    backgroundColor: Colors.gray,
  },

  inputField: {
    margin: 10,
    backgroundColor: Colors.realWhite,
  },

  input: {
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 20,
  },

  label: {
    padding: 2,
    marginLeft: 5,
  },
});
