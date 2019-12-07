import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Text from '../components/core/text';
import Header from '../components/core/header';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';
import {useDispatch} from 'react-redux';
import {addPressure} from '../redux/actions';

const BeachCleanScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.outer}>
        <View style={styles.container}>
          <Header>WWF Beach Clean-up</Header>
          <Text style={styles.paragraph}>
            <Text style={{fontWeight: 'bold'}}>About this event: </Text>
            Join WWF for a clean-up of a local beach to maintain cleaner, safer
            oceans.
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
          source={require('../assets/images/beachcleanup.png')}
        />
        <View style={styles.buttonWrap}>
          <Button
            title={'RSVP'}
            style={styles.rsvpButton}
            onPress={() => {
              navigation.navigate('Home');
              dispatch(addPressure(20, 'RSVP-ed to event!'));
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
    marginBottom: 10,
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

export default BeachCleanScreen;
