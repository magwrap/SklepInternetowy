import React, {useState} from 'react';
import {Text} from '@/components/atoms';
import {TouchableOpacity, View, TextInput} from 'react-native';

import {AppContainer} from '@/components/ui/AppContainer';
import {styles} from './styles';
import {WarningText, warningBorderColor} from '@/components/warnings/Warnings';
import {InputField} from '@/components/InputField/InputField';

interface RegistrationProps {
  navigation: any;
}

export const Register: React.FC<RegistrationProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [viewWarnings, setViewWarnings] = useState(false);

  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={[styles.text, styles.header]}>Registration Screen</Text>
          <InputField
            name="email"
            prop={email}
            setProp={setEmail}
            viewWarnings={viewWarnings}
          />
          <InputField
            name="password"
            prop={password}
            setProp={setPassword}
            viewWarnings={viewWarnings}
            secureTextEntry={true}
          />

          <InputField
            name="confirm password"
            prop={passwordConfirm}
            setProp={setPasswordConfirm}
            viewWarnings={viewWarnings}
            secureTextEntry={true}
            placeholder="Confirm your password"
          />
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              if (email && password && passwordConfirm) {
                //rejestracja uzytkownika
              } else {
                setViewWarnings(true);
              }
            }}
            style={styles.button}>
            <Text style={styles.text}>REGISTER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.text}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
};
