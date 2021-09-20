import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

interface openDrawerProps {
  navigation: any;
}

export const OpenDrawerButton: React.FC<openDrawerProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
      style={styles.button}>
      <Entypo name="menu" size={27} color={'black'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: 12,
  },
});
