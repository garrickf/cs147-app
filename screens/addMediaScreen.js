import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  View
} from 'react-native';

import CircleButton from '../components/core/circle-button';
import { aquaHex, coralHex, blackHex } from '../styles';
import Button, { BUTTON_TYPES, BUTTON_COLORS } from '../components/core/button';

import { RNCamera } from 'react-native-camera';


export default class addMediaScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      path: null
    };
  }

  takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      this.setState({ path: data.uri });
      console.log(path)
    } catch (err) {
      console.log('err: ', err);
    }
  };

  renderCamera() {
    return (
      <>
        <View style={styles.backButton}>
          <Button
            title={'BACK'}
            type={BUTTON_TYPES.secondary}
            color={BUTTON_COLORS.coral}
            onPress={() => this.props.navigation.navigate('Home', { post: null })}
          >
          </Button>
        </View>
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
              style={styles.circleButton}
            >
            </CircleButton>
          </RNCamera>
        </View>
      </>
    )
  }

  renderImage() {
    return (
      <>
        <View style={styles.backButton}>
          <Button
            title={'CANCEL'}
            type={BUTTON_TYPES.secondary}
            color={BUTTON_COLORS.coral}
            onPress={() => this.setState({ path: null })}
          />
        </View>

        <View style={{ flex: 1 }}>
          <ImageBackground style = {styles.container}
            source={{ uri: this.state.path }}
          >
          <View style = {styles.postButton}>
          <Button 
            title={'POST'}
            onPress={()=>this.props.navigation.navigate('Home', {post: 'media'})} //to do : figure out how to update with new beacon  
          />
          </View>
          </ImageBackground>
        </View>

      </>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postButton: {
    flex:1,
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
    flexDirection: 'row'
  },
  view: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  circleButton: {
    backgroundColor: aquaHex,
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
}); 
