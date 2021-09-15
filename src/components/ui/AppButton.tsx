import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text} from '../atoms';

interface AppButtonProps extends React.ComponentProps<typeof Box> {
  label: string;
  onPress: () => void;
}

export const AppButton = ({label, onPress, ...rest}: AppButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Box
        justifyContent="center"
        alignItems="center"
        p="s"
        m="s"
        width={350}
        height={60}
        alignSelf="center"
        borderRadius="m"
        bg="cardPrimaryBackground"
        {...rest}>
        <Text color="fontLight" fontSize={24} fontWeight="700">
          {label.toUpperCase()}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};
