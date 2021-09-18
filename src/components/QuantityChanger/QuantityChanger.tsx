import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../Button';
import {styles} from './styles';
interface QuantityChangerProps {
  quantity: number;
  setQuantity: (quantity: number) => void;
  style: {
    count: Object;
    countButtons: Object;
    textCount: Object;
  };
  goBelowOne?: boolean;
}

export const QuantityChanger: React.FC<QuantityChangerProps> = ({
  quantity,
  setQuantity,
  style,
  goBelowOne = false,
}) => {
  const maxProductQuantity = 99;
  const goUp = () => {
    setQuantity(quantity + 1);
  };

  const goDown = () => {
    if (quantity > 1 || goBelowOne) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <View style={style.count}>
      <View style={style.countButtons}>
        <Button
          text={'↑'}
          onPress={goUp}
          style={styles}
          disabled={maxProductQuantity === quantity}
        />
        <Button text={'↓'} onPress={goDown} style={styles} />
      </View>
      <Text style={style.textCount}>{quantity}</Text>
    </View>
  );
};
