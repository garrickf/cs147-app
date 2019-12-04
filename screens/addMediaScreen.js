import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import RecordingButton from '../components/recording-button';
import {aquaHex, coralHex, blackHex} from '../styles';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';

import {RNCamera} from 'react-native-camera';
import {addBeacon} from '../redux/actions';

const AddMediaScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [path, setPath] = useState(null);

  const takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      navigation.navigate('DisplayPhoto', {path: data.uri});
    } catch (err) {
      console.log('err: ', err);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <RNCamera
          ref={cam => {
            this.camera = cam;
          }}
          defaultTouchToFocus
          captureAudio={false}
          style={styles.view}>
          <RecordingButton
            onPress={() => takePicture()}
            style={styles.circleButton}
          />
        </RNCamera>
      </View>
    </>
  );
};

export default AddMediaScreen;

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
