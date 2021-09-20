import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface CartReturnButtonProps {
  route: {
    params: {
      name: string;
    };
  };
  navigation: any;
}

export const CartReturnButton: React.FC<CartReturnButtonProps> = ({
  route,
  navigation,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.button}>
      {route.params.name === 'Cart' ? (
        <AntDesign name="closesquare" size={30} color={'black'} />
      ) : (
        <Entypo name="back" size={30} color={'black'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginLeft: 15,
  },
});
