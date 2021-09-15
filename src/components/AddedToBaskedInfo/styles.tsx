import {Colors} from '@/config/Colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 350,
    height: 100,
    top: -250,
    right: 10,
    backgroundColor: 'rgba(20, 20, 20, 0.8)',
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    padding: 15,
    fontSize: 22,
    color: Colors.realWhite,
  },
  greenText: {
    fontSize: 50,
    color: Colors.green,
    paddingBottom: 15,
    paddingRight: 5,
  },
});
