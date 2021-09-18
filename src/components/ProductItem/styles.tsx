import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 5,
    borderBottomWidth: 1,
    marginRight: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  bigText: {
    fontSize: 20,
  },

  info: {
    paddingLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
    flexDirection: 'column',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
