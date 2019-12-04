import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../components/core/text';
import Header from '../components/core/header';

const BookClubScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <Header>Join a Green Book Club</Header>
        <Text style={styles.paragraph}>
          About this event: Join us at your local library to read and discuss
          books about the environment.
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
    paddingBottom: 10,
  },
  eventCard: {
    marginRight: 10,
  },
});

export default BookClubScreen;
