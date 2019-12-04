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
import ActionBar from '../components/core/action-bar';
import EventButton from '../components/core/event-button';

const AnimatedView = animated(View);

const RideWaveScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const events = [
    {
      header: 'Climate Change Rally',
      description: 'hello',
      screen: 'Rally',
      image: require('../assets/images/rally.png'),
    },
    {
      header: 'WWF Beach Clean-up',
      screen: 'BeachClean',
      image: require('../assets/images/beachcleanup.png'),
    },
    {
      header: 'Join a Green Book Club',
      screen: 'BookClub',
      image: require('../assets/images/bookclub.png'),
    },
  ];

  const trail = useTrail(events.length, {
    y: 30,
    opacity: 0,
    from: {y: 30, opacity: 0},
    config: {tension: 200, friction: 5},
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
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 5}}>
        {trail.map(({y, opacity}, idx) => (
          <EventButton
            header={events[idx].header}
            description={events[idx].description}
            image={events[idx].image}
            style={styles.eventCard}
            onPress={() => {
              navigation.navigate(events[idx].screen);
            }}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  BackButton: {
    alignSelf: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
    marginTop: 20,
  },
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
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
    paddingHorizontal: 10,
  },
});

export default RideWaveScreen;
