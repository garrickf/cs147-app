import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

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
import LinkCard from '../components/add-link';

const RideWaveScreen = ({navigation}) => {
  const dispatch = useDispatch();

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
      <View style={styles.BackButton}>
        <Button
          title={'NOT FEELING WAVY TODAY'}
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

const styles = StyleSheet.create({
  BackButton: {
    alignSelf: 'flex-end',
    marginBottom: 60,
    marginRight: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginLeft: 20,
    marginRight: 20,
  },
  sectionTitle: {
    fontSize: 24,
    // fontWeight: '700',
    color: Colors.black,
    fontFamily: 'DMSans-Bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  eventCard: {
    width: '100%',
    height: '100%',
  },
});

export default RideWaveScreen;
