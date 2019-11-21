import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CircleButton from '../components/core/circle-button';
import {aquaHex, coralHex, blackHex} from '../styles';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';

import {RNCamera} from 'react-native-camera';
import {addBeacon} from '../redux/actions';

const AddMediaScreen = ({navigation}) => {
  dispatch = useDispatch();
  const [path, setPath] = useState(null);

  const takePicture = async () => {
    try {
      const data = await this.camera.takePictureAsync();
      setPath(data.uri);
      console.log(path);
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const renderCamera = () => {
    return (
      <>
        <View style={styles.backButton}>
          <Button
            title={'BACK'}
            type={BUTTON_TYPES.secondary}
            color={BUTTON_COLORS.coral}
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
        <View style={styles.container}>
          <RNCamera
            ref={cam => {
              this.camera = cam;
            }}
            defaultTouchToFocus
            captureAudio={false}
            style={styles.view}>
            <CircleButton
              onPress={() => takePicture()}
              style={styles.circleButton}></CircleButton>
          </RNCamera>
        </View>
      </>
    );
  };

  const renderImage = () => {
    return (
      <>
        <View style={styles.backButton}>
          <Button
            title={'CANCEL'}
            type={BUTTON_TYPES.secondary}
            color={BUTTON_COLORS.coral}
            onPress={() => setPath(null)}
          />
        </View>

        <View style={{flex: 1}}>
          <ImageBackground style={styles.container} source={{uri: path}}>
            <View style={styles.postButton}>
              <Button
                title={'POST'}
                onPress={() => {
                  dispatch(
                    addBeacon({
                      header: 'My New Story!!!',
                      body: 'I am so hapy to be sharing!!!!',
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

  return <View style={{flex: 1}}>{path ? renderImage() : renderCamera()}</View>;
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
    backgroundColor: aquaHex,
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});
