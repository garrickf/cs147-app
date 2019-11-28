import React from 'react';
import { View, StyleSheet} from 'react-native';
import {aquaHex, whiteHex, effects} from '../styles';

const Current = () => {
  return (
      <View style = {styles.particle}>
      <View style={styles.nucleus} />
      </View>

  );
};

export default Current; 

const styles = StyleSheet.create({
  particle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    height: 26,
    top: 550,
    left: 200,
    borderRadius: 13,
    backgroundColor: whiteHex,
    position: 'absolute',
    ...effects.glow,
    shadowColor: aquaHex,
  },
  nucleus: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: aquaHex,
  },
});
