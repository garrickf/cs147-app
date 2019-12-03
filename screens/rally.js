import React from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useSpring, animated} from 'react-spring';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';
import ActionBar from '../components/core/action-bar';

const AnimatedView = animated(View);

const RallyScreen = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Climate Change Rally</Text>
        <Text style={styles.sectionDescription}>
          About this event: Fight for the Green New Deal to reduce carbon
          emissions and support communities facing the worst effects of the
          climate crisis.
        </Text>
        <Text style={styles.sectionDescription}>
          Date & Time: 12th October 2019, 12:00pm
        </Text>
      </View>
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
    marginRight: 10,
  },
});

export default RallyScreen;
