import React, {useState, useEffect} from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {useSpring, animated, useTrail} from 'react-spring';
import {coralHex, aquaHex, orchidHex, whiteHex, effects} from '../styles';
import {useSelector, useDispatch} from 'react-redux';
import {toggleModal, updateModal} from '../redux/actions';
import {getModalActive} from '../redux/selectors';

const AnimatedView = animated(View);
const AnimatedTouchableOpacity = animated(TouchableOpacity);

const Particle = ({style, scale, toggled}) => {
  /* Special thanks to parametric equations */
  const a = Math.random() * 100 + 20;
  const b = Math.random() * 100 + 20;
  const delay = Math.random() * 1000;

  const props = useSpring({
    from: {t: 0},
    to: {t: 500 * Math.PI},
    reset: true,
    config: {friction: 1000, mass: 1000, tension: 1},
    delay: delay,
  });

  return (
    <AnimatedView
      style={{
        ...styles.particle,
        transform: [
          {
            translateX: props.t.interpolate(
              t => (a + Math.cos(5 * t)) * Math.cos(t),
            ),
          },
          {
            translateY: props.t.interpolate(
              t => (b + Math.sin(5 * t)) * Math.sin(t),
            ),
          },
          {scale: scale},
        ],
        ...style,
      }}>
      <View style={styles.nucleus} />
    </AnimatedView>
  );
};

const Beacon = ({type, location, attention, content, mine, viewed}) => {
  const [toggled, setToggle] = useState(false);
  const modalActive = useSelector(getModalActive);

  // If the story modal was closed, any beacon in focus should come out of focus.
  useEffect(() => {
    if (!modalActive) {
      setToggle(false);
    }
  }, [modalActive]);

  // Set the initial props for how the beacon gets scaled.
  const props = useSpring({
    scale: toggled ? 0.6 : viewed ? 0.15 : 0.3,
    from: {scale: viewed ? 0.15 : 0.3},
    config: {tension: 200},
  });

  // Create a particle effect arround the beacon.
  const particles = [...Array(attention).keys()];

  const trail = useTrail(particles.length, {
    opacity: toggled ? 1 : 0,
    scale: toggled ? 1 : 0,
    from: {opacity: 0, scale: 0},
    config: {tension: 200},
    delay: toggled ? 500 : 0,
  });

  // When a beacon is pressed, it sends its information to be displayed in a modal.
  const dispatch = useDispatch();
  const handlePress = () => {
    setToggle(!toggled);
    dispatch(
      updateModal({
        header: content.header,
        body: content.body,
        type: type,
      }),
    );
    dispatch(toggleModal());
  };

  return (
    <AnimatedTouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      style={{
        // backgroundColor: 'blue', // DEBUG
        height: toggled ? 100 : 50, // Update bounds of button
        position: 'absolute',
        left: props.scale.interpolate(s => location.x - (s - 0.3) * 50),
        top: props.scale.interpolate(s => location.y - (s - 0.3) * 150),
      }}>
      <View>
        <AnimatedView
          style={{
            ...styles.circle,
            borderColor: mine ? aquaHex : coralHex,
            borderWidth: props.scale.interpolate(s => 30 * s),
            borderRadius: props.scale.interpolate(
              s => (50 * s) / (type === 'NEWS' ? 2 : 1),
            ),
            height: props.scale.interpolate(s => 100 * s),
            width: props.scale.interpolate(s => 100 * s),
          }}
        />
        <AnimatedView
          style={{
            ...styles.bottom,
            borderTopColor: mine ? aquaHex : coralHex,
            borderLeftWidth: props.scale.interpolate(s => 45 * s),
            borderRightWidth: props.scale.interpolate(s => 45 * s),
            marginLeft: props.scale.interpolate(s => 5 * s),
            marginTop: props.scale.interpolate(s => 72 * s),
            borderTopWidth: props.scale.interpolate(s => 90 * s),
          }}
        />
      </View>

      {trail.map(({opacity, scale}, index) => (
        <Particle
          key={particles[index]}
          style={{opacity: opacity}}
          scale={scale}
          toggled={toggled}
        />
      ))}
    </AnimatedTouchableOpacity>
  );
};

Beacon.defaultProps = {
  location: {
    x: 200,
    y: 500,
  },
  attention: 5,
  content: {
    header: 'Header',
    body: 'Body',
  },
  mine: false,
  viewed: false,
  type: 'NEWS',
};

export default Beacon;

const styles = StyleSheet.create({
  circle: {
    //borderColor: aquaHex,
  },
  bottom: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    //borderTopColor: aquaHex,
    position: 'absolute',
  },
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  particle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 26,
    height: 26,
    top: 17,
    left: 17,
    borderRadius: 13,
    backgroundColor: whiteHex,
    position: 'absolute',
    ...effects.glow,
    shadowColor: '#DDC7F5',
  },
  nucleus: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: orchidHex,
  },
});
