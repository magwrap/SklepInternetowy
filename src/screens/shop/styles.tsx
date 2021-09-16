import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  header: {
    fontSize: 30,
    padding: 15,
  },
  button: {
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.green,
    shadowRadius: 20,
  },
});
