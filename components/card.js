import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {typography} from '../styles';

// Basic card component

export default ({header, body}) => (
  <View style={styles.card}>
    <Text style={typography.header}>{header}</Text>
    <Text style={typography.body}>{body}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
    backgroundColor: '#FFF',
    borderRadius: 10,
    borderColor: '#CCC',
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
