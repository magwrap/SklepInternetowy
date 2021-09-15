import {createBox, createText} from '@shopify/restyle';
import {ThemeT} from '@/theme/theme';
import React from 'react';

export const Box = createBox<ThemeT>();

export const Text = createText<ThemeT>();

export const Row = (props: React.ComponentProps<typeof Box>) => (
  <Box flexDirection="row" {...props} />
);

export const Center = (props: React.ComponentProps<typeof Box>) => (
  <Box justifyContent="center" alignItems="center" {...props} />
);
