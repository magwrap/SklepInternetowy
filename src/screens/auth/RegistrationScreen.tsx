import React, {useState} from 'react';
import {Text} from '@/components/atoms';
import {TouchableOpacity, View} from 'react-native';

import {AppContainer} from '@/components/ui/AppContainer';
import {styles} from './styles';
import {InputField} from '@/components/InputField/InputField';
import {texts} from '@/config/Texts';

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
          <Text style={[styles.text, styles.header]}>
            {texts.auth.registrationScreen}
          </Text>
          <InputField
            name={texts.auth.email}
            prop={email}
            setProp={setEmail}
            viewWarnings={viewWarnings}
          />
          <InputField
            name={texts.auth.password}
            prop={password}
            setProp={setPassword}
            viewWarnings={viewWarnings}
            secureTextEntry={true}
          />

          <InputField
            name={texts.auth.confirmPassword}
            prop={passwordConfirm}
            setProp={setPasswordConfirm}
            viewWarnings={viewWarnings}
            secureTextEntry={true}
            placeholder={texts.auth.confirmPasswordPlaceholder}
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
            <Text style={styles.text}>{texts.auth.registerButton}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.button}>
            <Text style={styles.text}>{texts.auth.goToLoginButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
};
