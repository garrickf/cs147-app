import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useSpring, animated} from 'react-spring';
import Text from './text';
import {effects} from '../../styles';

// A toast is a popup message alerting the user of something.

const TOAST_DURATION = 3000;
const AnimatedView = animated(View);

export default ({children}) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (children.length) {
      setActive(true);
    }
    setTimeout(() => {
      console.log('remove');
      setActive(false);
    }, TOAST_DURATION);
  }, [children]);

  // TODO: translate to useRef and useTrail, but doesn't seem to animate...
  const props = useSpring({
    opacity: active ? 1 : 0,
    y: active ? 0 : 10,
    config: {tension: 200},
  });

  const displayProps = useSpring({
    display: active ? 'flex' : 'none',
    delay: active ? 0 : 250,
  });

  return (
    <AnimatedView
      style={{
        ...styles.toast,
        opacity: props.opacity,
        transform: [{translateY: props.y}],
        display: displayProps.display,
      }}>
      <Text>{children}</Text>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 125,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    borderRadius: 35,
    ...effects.dropShadow,
  },
});
