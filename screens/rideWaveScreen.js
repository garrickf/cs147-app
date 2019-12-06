import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Text from '../components/core/text';
import Header from '../components/core/header';
import {useTrail} from 'react-spring';

import EventButton from '../components/core/event-button';

const RideWaveScreen = ({navigation}) => {
  const [secondsLeft, setSecondsLeft] = useState(3600 * 8);

  useEffect(() => {
    setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);
  }, [secondsLeft]);

  let hours = secondsLeft / 3600 - ((secondsLeft / 3600) % 1);
  hours = ('0' + hours).slice(-2);
  let minutes = secondsLeft / 60 - hours * 60 - ((secondsLeft / 60) % 1);
  minutes = ('0' + minutes).slice(-2);
  let seconds = secondsLeft - hours * 3600 - minutes * 60;
  seconds = ('0' + seconds).slice(-2);

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
    to: {x: 0, opacity: 1},
    from: {x: 30, opacity: 0},
    config: {tension: 100, friction: 10},
  });

  return (
    <>
      <View style={styles.container}>
        <Header>🌊 Ride the Wave!{'\n'} </Header>
        <Text style={styles.paragraph}>
          People in your area are rushing to take action on{' '}
          <Text style={{fontSize: 20, textDecorationLine: 'underline'}}>
            environmentalism
          </Text>
          .
        </Text>
        <Text style={styles.paragraph}>
          Swipe to explore how{' '}
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>you </Text>
          can ride the wave!{' '}
        </Text>
        <Text style={styles.paragraph}>
          Low tide in: {hours}:{minutes}:{seconds} {'\n'}
        </Text>
      </View>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingTop: 5}}>
        {trail.map(({x, opacity}, idx) => (
          <EventButton
            key={idx}
            header={events[idx].header}
            description={events[idx].description}
            image={events[idx].image}
            style={styles.eventCard}
            onPress={() => {
              navigation.navigate(events[idx].screen);
            }}
            animateStyle={{opacity: opacity, transform: [{translateX: x}]}}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40,
  },
  paragraph: {
    paddingBottom: 25,
    fontSize: 20,
  },
  eventCard: {
    paddingHorizontal: 10,
  },
});

export default RideWaveScreen;
