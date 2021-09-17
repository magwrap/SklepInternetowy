import {Button} from '@/components/Button';
import {InputField} from '@/components/InputField/InputField';
import {texts} from '@/config/Texts';
import React, {useState} from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {styles} from './styles';

interface PaymentProps {
  navigation: any;
}

export const Payment: React.FC<PaymentProps> = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [postcode, setPostcode] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [viewWarnings, setViewWarnings] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>{texts.paymentScreen.yourData}</Text>
        <InputField
          name={texts.paymentScreen.firstName}
          prop={firstName}
          setProp={setFirstName}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={texts.paymentScreen.lastName}
          prop={lastName}
          setProp={setLastName}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={texts.paymentScreen.email}
          prop={email}
          setProp={setEmail}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={texts.paymentScreen.postcode}
          prop={postcode}
          setProp={setPostcode}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={texts.paymentScreen.adress}
          prop={adress}
          setProp={setAdress}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={texts.paymentScreen.city}
          prop={city}
          setProp={setCity}
          viewWarnings={viewWarnings}
        />
        <InputField
          name={texts.paymentScreen.phone}
          prop={phone}
          setProp={setPhone}
          viewWarnings={viewWarnings}
        />
        <Button
          text={texts.paymentScreen.nextStep}
          onPress={() => {
            if (
              firstName
              // &&
              // lastName &&
              // email &&
              // postcode &&
              // adress &&
              // city &&
              // phone
            ) {
              navigation.navigate('DeliveryAndPay');
            } else {
              setViewWarnings(true);
            }
          }}
          style={styles}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
