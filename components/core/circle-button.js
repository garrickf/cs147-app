import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {aquaHex} from '../../styles';
import {animated} from 'react-spring';
const AnimatedView = animated(View);

export default ({image, style, onPress}) => {
  // Component
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <AnimatedView
        style={{
          ...styles.circleButtonDefault,
          ...style,
        }}>
        <Image style={styles.icon} source={image} />
      </AnimatedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circleButtonDefault: {
    position: 'relative',
    backgroundColor: aquaHex,
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
  },
});
