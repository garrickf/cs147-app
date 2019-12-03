import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import Text from './text';
import {animated} from 'react-spring';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {effects} from '../../styles';

const AnimatedView = animated(View);

export default ({image, style, animateStyle, onPress, header}) => {
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
        <View style={styles.eventButtonDefault}>
          <Text style={styles.headerText}>{header}</Text>
          <Image style={styles.icon} source={image} />
        </View>
      </AnimatedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '40%',
  },
  animatedContainer: {
    alignItems: 'center',
  },
  eventButtonDefault: {
    //width: 400,
    height: '90%',
    borderRadius: 10,
    //justifyContent: 'center',
    alignItems: 'center',
    ...effects.dropShadow,
  },
  icon: {
    //width: '100%',
    height: '70%',
  },

  headerText: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.black,
    fontFamily: 'DMSans-Bold',
    paddingTop: 20,
    paddingBottom: 20,
  },

  descriptionText: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    padding: 20,
  },
});
