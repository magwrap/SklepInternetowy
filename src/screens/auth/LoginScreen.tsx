import React, {useState} from 'react';
import {Text} from '@/components/atoms';
import {TouchableOpacity, View} from 'react-native';

import {AppContainer} from '@/components/ui/AppContainer';
import {useAuthContext} from '@/hooks/AuthProvider';

import {styles} from './styles';
import {InputField} from '@/components/InputField/InputField';
import {texts} from '@/config/Texts';

interface LoginProps {
  navigation: any;
}

export const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewWarnings, setViewWarnings] = useState(false);

  const {login} = useAuthContext();
  return (
    <AppContainer>
      <View style={styles.container}>
        <View style={styles.fields}>
          <Text style={[styles.text, styles.header]}>
            {texts.auth.loginScreen}
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
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => {
              if (email && password) {
                login();
              } else {
                setViewWarnings(true);
              }
            }}
            style={styles.button}>
            <Text style={styles.text}>{texts.auth.loginButton}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.button}>
            <Text style={styles.text}>{texts.auth.goToRegisterButton}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </AppContainer>
  );
};
