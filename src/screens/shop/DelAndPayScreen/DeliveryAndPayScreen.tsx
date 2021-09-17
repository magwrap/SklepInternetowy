import {Button} from '@/components/Button';
import {texts} from '@/config/Texts';
import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface DeliveryAndPayProps {}

export const DeliveryAndPay: React.FC<DeliveryAndPayProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{texts.deliveryAndPay.chooseDelMeth}</Text>
      <View style={styles.pairOfButtons}>
        <Button
          text={texts.deliveryAndPay.deliveryMethods.a}
          onPress={() => {}}
          style={styles}
        />
        <Button
          text={texts.deliveryAndPay.deliveryMethods.b}
          onPress={() => {}}
          style={styles}
        />
      </View>
      <Button
        text={texts.deliveryAndPay.deliveryMethods.c}
        onPress={() => {}}
        style={styles}
      />
      <Text style={styles.header}>{texts.deliveryAndPay.choosePayMeth}</Text>
      <View style={styles.pairOfButtons}>
        <Button
          text={texts.deliveryAndPay.paymentMethods.a}
          onPress={() => {}}
          style={styles}
        />
        <Button
          text={texts.deliveryAndPay.paymentMethods.b}
          onPress={() => {}}
          style={styles}
        />
      </View>
      <View style={styles.pairOfButtons}>
        <Button
          text={texts.deliveryAndPay.paymentMethods.c}
          onPress={() => {}}
          style={styles}
        />
        <Button
          text={texts.deliveryAndPay.paymentMethods.d}
          onPress={() => {}}
          style={styles}
        />
      </View>
    </View>
  );
};
