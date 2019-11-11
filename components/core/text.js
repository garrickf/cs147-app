import React from 'react';
import {Text} from 'react-native';
import {typography} from '../../styles';

// Basic stylistic override for the normal React Native Text component.

export default ({children, style}) => (
  <Text style={{...typography.body, ...style}}>{children}</Text>
);
