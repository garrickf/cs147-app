import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSpring, animated, useTrail} from 'react-spring';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';
import Card from '../components/core/card';
import ActionBar from '../components/core/action-bar';

const AnimatedView = animated(View);

const RideWaveScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const events = [
    {
      title: 'Climate Change Rally',
      image: require('../assets/images/rally.png'),
    },
    {
      title: 'WWF Beach Clean-up',
      image: require('../assets/images/beachcleanup.png'),
    },
    {
      title: 'Join a Green Book Club',
      image: require('../assets/images/bookclub.png'),
    },
  ];

  const trail = useTrail(events.length, {
    y: 30,
    opacity: 0,
    from: {y: 30, opacity: 0},
    config: {tension: 300, friction: 25},
  });

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>🌊 Ride the Wave!</Text>
        <Text style={styles.sectionDescription}>
          People in your area are rushing to take action on environmentalism.
        </Text>
        <Text style={styles.sectionDescription}>
          Swipe to explore how you can ride the wave!
        </Text>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {trail.map(({y, opacity}, idx) => (
          <Card
            title={events[idx].title}
            style={styles.eventCard}
            image={events[idx].image}
          />
        ))}
      </ScrollView>

      <View style={styles.BackButton}>
        <Button
          title={'NOT FEELING WAVY'}
          type={BUTTON_TYPES.secondary}
          color={BUTTON_COLORS.coral}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
      </View>
    </>
  );
};
/*
<ScrollView horizontal pagingEnabled>
<Card>
  <ImageBackground
    styles={styles.eventCard}
    source={require('../assets/images/wave1.png')}>
    <Text>Hi I am a card</Text>
  </ImageBackground>
</Card>
</ScrollView>*/

/*
<AnimatedView>
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
  {trail.map(({y, opacity}, idx) => (
    <Card
      title={events[idx].title}
      style={styles.button}
      animateStyle={{opacity: opacity, transform: [{translateY: y}]}}
      image={events[idx].image}
    />
  ))}
</ScrollView>
)}
</AnimatedView>*/

const styles = StyleSheet.create({
  BackButton: {
    alignSelf: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  sectionTitle: {
    fontSize: 24,
    // fontWeight: '700',
    color: Colors.black,
    fontFamily: 'DMSans-Bold',
    marginLeft: 20,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    padding: 20,
  },
  eventCard: {
    width: '100%',
    height: '100%',
    marginHorizontal: 20,
  },
});

export default RideWaveScreen;
