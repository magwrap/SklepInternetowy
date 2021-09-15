import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  style?: {
    button: Object;
    text: Object;
  };
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  text,
  style = styles,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style.button}
      disabled={disabled}>
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
