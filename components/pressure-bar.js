import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Text from '../components/core/text';
import SquareButton from './core/square-button';

import Bar from '../assets/images/bar.svg';
import BarBorder from '../assets/images/bar-border.svg';
import Logo from '../assets/images/logo.svg';

import {aquaHex, effects, grayHex, whiteHex} from '../styles';
import {useSpring, animated, useTrail} from 'react-spring';
import {getPressurePercent} from '../redux/selectors';
import pressure from '../redux/reducers/pressure';
import {addPressure} from '../redux/actions';

const AnimatedView = animated(View);
const AnimatedBar = animated(Bar);

export default ({navigation}) => {
  const [active, setActive] = useState(false);
  const [prevPercent, setPrevPercent] = useState(0);
  const percent = useSelector(getPressurePercent);

  // Keep track of the previous percent
  useEffect(() => {
    setPrevPercent(percent);
  }, [percent]);

  const FULL_WIDTH = 370;

  const props = useSpring({
    from: {top: -420, height: 0, padding: 0},
    to: {
      top: active ? -70 : -420,
      height: active ? 175 : 0,
      padding: active ? 20 : 0,
    },
    config: {tension: 260},
  });

  const dispatch = useDispatch();
  const handlePress = () => {
    setActive(!active);
    dispatch(addPressure(5, 'I clicked a button.'));
  };

  const buttons = [
    {title: 'Ride Wave', image: require('../assets/images/topic.png')},
    {title: 'Change Topic', image: require('../assets/images/topic.png')},
    {title: 'Help', image: require('../assets/images/topic.png')},
    {title: 'Account', image: require('../assets/images/topic.png')},
    {title: 'Settings', image: require('../assets/images/gear.png')},
  ];

  // A trail takes a number (of springs to generate) and a description of the
  // object it must return a list of. This list is spread (along with the original
  // one) over a set of elements.
  const trail = useTrail(buttons.length, {
    y: active ? 0 : 30,
    opacity: active ? 1 : 0,
    from: {y: 30, opacity: 0},
    config: {tension: 300, friction: 25},
  });

  const barProps = useSpring({
    from: {p: prevPercent},
    to: {p: percent},
  });

  const bar = (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlePress}
      style={{alignItems: 'center'}}>
      <View style={styles.barBg}>
        <View style={styles.barBgAnchor}>
          <BarBorder fill={aquaHex} />
        </View>
      </View>

      <View style={styles.logo}>
        <View style={styles.logoAnchor}>
          <Logo fill={grayHex} />
        </View>
      </View>

      <View style={styles.barAnchor}>
        <AnimatedBar
          width={barProps.p.interpolate(p => (p / 100) * FULL_WIDTH)}
          fill={aquaHex}
        />
      </View>

      <AnimatedView style={{height: props.height, paddingTop: props.padding}}>
        {active && (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingHorizontal: 10, paddingTop: 5}}>
            {trail.map(({y, opacity}, idx) => (
              <SquareButton
                title={buttons[idx].title}
                style={styles.button}
                animateStyle={{opacity: opacity, transform: [{translateY: y}]}}
                image={buttons[idx].image}
                onPress={() => {
                  navigation.navigate('RideWave');
                }}
              />
            ))}
          </ScrollView>
        )}
      </AnimatedView>

      <View style={styles.infoBar}>
        <Text style={styles.infoBarText}>Topic: Environment</Text>

        <Text style={styles.infoBarText}>+1596 others</Text>
      </View>
    </TouchableOpacity>
  );

  const handleBackgroundPress = () => {
    setActive(false);
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleBackgroundPress}>
        <View style={{...styles.backdrop, display: active ? 'flex' : 'none'}} />
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <AnimatedView style={{...styles.backingCard, top: props.top}} />
        {bar}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  backingCard: {
    backgroundColor: whiteHex,
    ...effects.dropShadow,
    position: 'absolute',
    width: '100%',
    height: 350,
    borderRadius: 20,
  },
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    position: 'absolute',
  },
  logoAnchor: {
    width: 370, // Place at same location as left of main bar
  },
  barBg: {
    position: 'absolute',
  },
  barBgAnchor: {
    marginTop: -6,
  },
  barAnchor: {
    width: 370,
  },
  infoBar: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoBarText: {
    fontWeight: 'bold',
    color: aquaHex,
  },
  button: {
    paddingHorizontal: 5,
  },
  backdrop: {
    position: 'absolute',
    // backgroundColor: 'yellow', // DEBUG TOUCH EVENTS
    top: 0,
    bottom: -50,
    left: 0,
    right: 0,
  },
});
