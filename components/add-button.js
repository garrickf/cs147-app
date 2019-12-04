import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {TouchableOpacity, View, Image, StyleSheet} from 'react-native';
import {useSpring, animated} from 'react-spring';
import {aquaHex, coralHex} from '../styles';
import CircleButton from './core/circle-button';
import {markPressureVisible} from '../redux/actions';

const AnimatedView = animated(View);

export default ({navigation}) => {
  // Animation primitives
  const [toggled, setToggle] = useState(false);
  // If toggled, button rotates by 45 degrees
  const props = useSpring({
    rotation: toggled ? '135deg' : '0deg',
    color: toggled ? coralHex : aquaHex,
    config: {tension: 300},
  });

  const newsButtonProps = useSpring({
    scale: toggled ? 1 : 0,
    x: toggled ? 40 : 0,
    y: toggled ? -40 : 0,
    from: {scale: 0, y: 0, x: 0},
    config: {tension: 300},
    delay: 150,
  });

  const mediaButtonProps = useSpring({
    scale: toggled ? 1 : 0,
    x: toggled ? -40 : 0,
    y: toggled ? -40 : 0,
    from: {scale: 0, y: 0, x: 0},
    config: {tension: 300},
    delay: 50,
  });

  const handlePress = () => {
    setToggle(!toggled);
  };

  const dispatch = useDispatch();

  const buttonBar = (
    <>
      <CircleButton
        onPress={() => {
          dispatch(markPressureVisible(false));
          setToggle(false);
          navigation.navigate('AddMedia');
        }}
        // onPress={() => handleSecondaryPress('media')}
        style={{
          ...styles.mediaButton,
          transform: [
            {scale: mediaButtonProps.scale},
            {translateY: mediaButtonProps.y},
            {translateX: mediaButtonProps.x},
          ],
        }}
        image={require('../assets/images/camera.png')}
      />
      <CircleButton
        onPress={() => {
          dispatch(markPressureVisible(false));
          setToggle(false);
          navigation.navigate('AddLink');
        }}
        // onPress={() => handleSecondaryPress('news')}
        style={{
          ...styles.newsButton,
          transform: [
            {scale: newsButtonProps.scale},
            {translateY: newsButtonProps.y},
            {translateX: newsButtonProps.x},
          ],
        }}
        image={require('../assets/images/news.png')}
      />
    </>
  );

  // Component
  return (
    <View style={styles.addButtonBar}>
      {buttonBar}
      <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
        <AnimatedView
          style={{
            ...styles.circleButton,
            transform: [{rotate: props.rotation}],
            backgroundColor: props.color,
          }}>
          <Image
            style={styles.icon}
            source={require('../assets/images/plus.png')}
          />
        </AnimatedView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addButtonBar: {
    width: '100%',
    alignItems: 'center',
  },
  circleButton: {
    position: 'relative',
    backgroundColor: aquaHex,
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsButton: {
    position: 'absolute',
    left: -(70 / 2) + 20, // Center button and preset location
    top: -20,
    backgroundColor: aquaHex,
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaButton: {
    position: 'absolute',
    left: -(70 / 2) - 20, // Center button and preset location
    top: -20,
    backgroundColor: aquaHex,
    width: 70,
    height: 70,
    borderRadius: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 45,
    height: 45,
  },
});
