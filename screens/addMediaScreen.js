import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import CircleButton from '../components/core/circle-button';
import {aquaHex, coralHex} from '../styles';

import { RNCamera } from 'react-native-camera';

export default class addMediaScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(cam) => {
            this.camera = cam
          }}
          defaultTouchToFocus
          captureAudio={false}
          style={styles.view}
          >
          <CircleButton
            onPress={this.takePicture.bind(this)}
            styles={{...styles.circleButton}}
            >
          </CircleButton>
        </RNCamera>
      </View>
    );
  }

takePicture = async() => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data.uri);
  }
};
}

// now do something to show its done, also add cancel button 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  circleButton: {
    position: 'relative',
    backgroundColor: aquaHex,
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 
