import React, {useState} from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';
import {useSpring, animated} from 'react-spring';
import {aquaHex, coralHex} from '../styles';
import CircleButton from './core/circle-button';

export default ({type, location}) => {
  const [toggled, setToggle] = useState(false);

  return (
    <TouchableOpacity onPress={() => setToggle(!toggled)} activeOpacity={0.5}>
      <View
        style={{
          ...styles.circle,
          borderWidth: toggled ? 60 : 30,
          borderRadius: toggled ? 100 : 50,
          height: toggled ? 200 : 100,
          width: toggled ? 200 : 100,
        }}
      />

      <View
        style={{
          ...styles.bottom,
          borderLeftWidth: toggled ? 80 : 40,
          borderRightWidth: toggled ? 80 : 40,
          marginLeft: toggled ? 22 : 11,
          marginTop: toggled ? 160 : 80,
          borderTopWidth: toggled ? 160 : 80,
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderColor: aquaHex,
  },

  bottom: {
    width: 0,
    height: 0,
    borderLeftWidth: 40,
    borderLeftColor: 'transparent',
    borderRightWidth: 40,
    borderRightColor: 'transparent',
    borderTopWidth: 80,
    borderTopColor: aquaHex,
    marginLeft: 11,
    position: 'absolute',
    marginTop: 80,
  },
  /*beacon: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: aquaHex,
  },
  */
  /*
  beacon: {
    backgroundColor: aquaHex,
  },
  */
});
