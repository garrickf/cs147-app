import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
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
      <AnimatedView
        style={{
          ...styles.recordingButton,
          ...style,
        }}>
        <Image style={styles.icon1} source={image} />
      </AnimatedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    circleButtonDefault: {
        position: 'relative',
        borderColor:'#FFF',
        borderWidth: 5,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },    
      recordingButton: {
        position: 'absolute',
        backgroundColor: '#FFF',
        opacity: 0.7,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
  icon: {
    width: 40,
    height: 40,
  },

});
