import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 265,
    height: 70,
    bottom: 33,
    right: 60,
    backgroundColor: 'rgba(20, 20, 20, 0.75)',
    borderRadius: 50,
    borderBottomEndRadius: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    padding: 15,
    fontSize: 20,
    color: Colors.realWhite,
    fontWeight: '600',
  },
  greenText: {
    fontSize: 50,
    paddingBottom: 10,
    color: Colors.green,
  },
});
