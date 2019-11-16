import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Text from './text';
import {aquaHex} from '../../styles';
import {animated} from 'react-spring';
const AnimatedView = animated(View);

export default ({image, style, animateStyle, onPress, title}) => {
  // Component
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{...styles.container, ...style}}>
      <AnimatedView
        style={{
          ...styles.animatedContainer,
          ...animateStyle,
        }}>
        <View style={styles.squareButtonDefault}>
          <Image style={styles.icon} source={image} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
      </AnimatedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  animatedContainer: {
    alignItems: 'center',
  },
  squareButtonDefault: {
    position: 'relative',
    backgroundColor: aquaHex,
    width: 110,
    height: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
  titleText: {
    marginTop: 5,
    fontWeight: 'bold',
  },
});
