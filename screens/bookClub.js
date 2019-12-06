import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Text from '../components/core/text';
import Header from '../components/core/header';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';

const BookClubScreen = ({navigation}) => {
  return (
    <>
      <View style={styles.outer}>
        <View style={styles.container}>
          <Header>Join a Green Book Club</Header>
          <Text style={styles.paragraph}>
            <Text style={{fontWeight: 'bold'}}>About this event: </Text>
            Join us at your local library to read and discuss books about the
            environment.
          </Text>
          <Text style={styles.paragraph}>
            <Text style={{fontWeight: 'bold'}}>Date & Time: </Text>
            12th October 2019, 12:00pm
          </Text>
          <Text style={styles.paragraph}>
            <Text style={{fontWeight: 'bold'}}>Location: </Text>
            459 Lagunita Drive, Stanford, CA
          </Text>
        </View>
        <Image
          style={styles.img}
          source={require('../assets/images/bookclub.png')}
        />
        <View style={styles.buttonWrap}>
          <Button
            title={'RSVP'}
            type={'secondary'}
            style={styles.rsvpButton}
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
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
  outer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  buttonWrap: {
    marginRight: 20,
  },
  paragraph: {
    paddingBottom: 10,
  },
  eventCard: {
    marginRight: 10,
  },
  img: {
    width: '100%',
    marginVertical: 50,
  },
  rsvpButton: {
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: 20,
  },
});

export default BookClubScreen;
