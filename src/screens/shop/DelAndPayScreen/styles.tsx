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
    shadowRadius: 20,
    width: '45%',
    height: 75,
  },
  pairOfButtons: {
    width: '100%',
    flexDirection: 'row',
  },
});
