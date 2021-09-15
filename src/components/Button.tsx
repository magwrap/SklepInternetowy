import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: {
    button: Object;
    text: Object;
  };
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  style = styles,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
  },
  button: {
    marginRight: 20,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
