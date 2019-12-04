import React from 'react';
import {
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Text from './text';
import {animated} from 'react-spring';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {effects} from '../../styles';

const AnimatedView = animated(View);
const pad = 10;

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
  },
  animatedContainer: {
    alignItems: 'center',
  },
  eventButtonDefault: {
    height: '80%',
    borderRadius: 10,
    //justifyContent: 'center',
    alignItems: 'center',
    ...effects.dropShadow,
  },
  icon: {
    width: Dimensions.get('window').width - 2 * pad,
    height: '90%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
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
