import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {typography} from '../../styles';

export default ({children, style}) => (
  <Text style={{...typography.header, ...styles.header, ...style}}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  header: {
    marginBottom: 14,
  },
});
