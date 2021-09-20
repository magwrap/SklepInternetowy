import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 15,
    top: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderEndWidth: 2,
    backgroundColor: Colors.green,
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    color: Colors.black,
  },
});
