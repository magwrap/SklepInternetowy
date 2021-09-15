import {Button} from '@/components/Button';
import React from 'react';
import {styles} from './styles';

interface GoToPaymentButtonProps {
  navigation: any;
}

export const GoToPaymentButton: React.FC<GoToPaymentButtonProps> = ({
  navigation,
}) => {
  return (
    <Button
      text="Pay"
      onPress={() => {
        navigation.navigate('Payment');
      }}
      style={styles}
    />
  );
};
