import React from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {blackHex} from '../styles';
import Button from '../components/core/button';

import {addBeacon, addPressure} from '../redux/actions';

const DisplayPhoto = ({navigation}) => {
  const dispatch = useDispatch();
  const path = navigation.getParam('path', 'null');
  return (
    <>
      <View style={{flex: 1}}>
        <ImageBackground style={styles.container} source={{uri: path}}>
          <View style={styles.postButton}>
            <Button
              title={'POST'}
              onPress={() => {
                dispatch(
                  addBeacon({
                    header: 'My New Story!!!',
                    story: [{uri: path}, '', 'shark'],
                    mine: true,
                    type: 'MEDIA',
                    location: {
                      x: 150,
                      y: 500,
                    },
                    attention: 0,
                  }),
                );
                dispatch(addPressure(30, 'Added new photo.'));
                navigation.navigate('Home');
              }}
            />
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default DisplayPhoto;

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
