import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './header';
import {effects} from '../../styles';

// Basic card component

export default ({header, children}) => (
  <View style={styles.card}>
    <Header>{header}</Header>
    <View>{children}</View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
    borderRadius: 10,
    ...effects.dropShadow,
  },
});
