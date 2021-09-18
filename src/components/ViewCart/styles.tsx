import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 110,
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomRightRadius: 50,
    borderEndWidth: 2,
    marginTop: 10,
  },
  product: {
    width: '33%',
    alignItems: 'center',
  },
  image: {
    padding: 10,
    width: 100,
    height: 75,
  },
  text: {
    fontSize: 12,
    padding: 2,
  },
  count: {
    flexDirection: 'row',
  },
  countButtons: {
    width: 30,
  },
  textCount: {
    fontSize: 30,
    padding: 10,
    fontWeight: '100',
  },
});
