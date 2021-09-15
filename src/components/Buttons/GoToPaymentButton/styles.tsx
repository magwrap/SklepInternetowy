import {StyleSheet} from 'react-native';
//TODO: poprawic wyglad przycisku GoToPayment
export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 18,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderEndWidth: 2,
    backgroundColor: '#666',
    borderColor: 'black',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});
