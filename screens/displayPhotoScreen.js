import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {aquaHex, coralHex, blackHex} from '../styles';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';
import {useSelector, useDispatch} from 'react-redux';

import {addBeacon} from '../redux/actions';

const displayPhoto = ({navigation}) => {
  dispatch = useDispatch(); 
    pathe = navigation.getParam('path', 'null');
    return (
      <>
        <View style={{flex: 1}}>
          <ImageBackground style={styles.container} source={{uri: pathe}}>
            <View style={styles.postButton}>
              <Button
                title={'POST'}
                onPress={() => {
                  dispatch(
                    addBeacon({
                      header: 'My New Story!!!',
                      story: [{uri: pathe}],
                      mine: true,
                      type: 'MEDIA',
                      location: {
                        x: 150,
                        y: 500,
                      },
                      attention: 0,
                    }),
                  );
                  navigation.navigate('Home');
                }}
              />
            </View>
          </ImageBackground>
        </View>
      </>
    );
  };

export default displayPhoto;

const styles = StyleSheet.create({
  postButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingRight: 20,
    paddingBottom: 60,
  },
  backButton: {
    backgroundColor: blackHex,
    width: 1000, // this is really bad need to fix this header
    alignSelf: 'flex-start',
    paddingTop: 60,
    paddingBottom: 20,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  circleButton: {
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});
