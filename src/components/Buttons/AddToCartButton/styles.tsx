import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  count: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },

  countButtons: {
    width: 50,
  },
  textCount: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingRight: 20,
  },
});
