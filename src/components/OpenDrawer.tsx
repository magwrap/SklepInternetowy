import React from 'react';
import {Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface openDrawerProps {
  navigation: any;
}

export const OpenDrawer: React.FC<openDrawerProps> = ({navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.openDrawer();
      }}
      style={{marginLeft: 12}}>
      <Image
        source={require('@/assets/menu.png')}
        style={{height: 20, width: 17}}
      />
    </TouchableOpacity>
  );
};
