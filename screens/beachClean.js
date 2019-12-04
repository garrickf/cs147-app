import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../components/core/text';
import Header from '../components/core/header';

const BeachCleanScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header>WWF Beach Clean-up</Header>
        <Text style={styles.paragraph}>
          About this event: Join WWF for a clean-up of a local beach to maintain
          cleaner, safer oceans.
        </Text>
        <Text style={styles.paragraph}>
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
  paragraph: {
    marginBottom: 10,
  },
  eventCard: {
    marginRight: 10,
  },
});

export default BeachCleanScreen;
