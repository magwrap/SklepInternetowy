import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: Colors.green,
    marginTop: 10,
    marginRight: 10,

    alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.realWhite,
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
    marginLeft: 5,
  },
  textCount: {
    fontSize: 30,
    textAlign: 'center',
    width: 60,
    marginRight: 15,
  },
});
