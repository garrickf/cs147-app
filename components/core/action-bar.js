import React from 'react';
import {View, StyleSheet} from 'react-native';

export default ({children}) => <View style={styles.actionBar}>{children}</View>;

const styles = StyleSheet.create({
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
});
