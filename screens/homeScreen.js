import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Vibration,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import mapStyle from '../maps/style';

import {Colors} from 'react-native/Libraries/NewAppScreen'; // TODO: deprecate

import Current from '../components/current-location';
import AddButton from '../components/add-button';
import Toast from '../components/core/toast';
import Beacon from '../components/beacon';
import Modal from '../components/modal';
import PressureBar from '../components/pressure-bar';
import {
  getBeacons,
  getPressureLogMostRecent,
  getPressureLogSize,
  getPressureFilled,
} from '../redux/selectors';
import {markPressureVisible} from '../redux/actions';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(markPressureVisible(true));
  }, 1000);
  console.log('rendering home screen....');

  const [toastMessage, updateToastMessage] = useState('');
  const mostRecentAction = useSelector(getPressureLogMostRecent);
  const filled = useSelector(getPressureFilled);
  const logSize = useSelector(getPressureLogSize);

  useEffect(() => {
    updateToastMessage(mostRecentAction);
    setTimeout(() => {
      updateToastMessage('');
    }, 4500);
  }, [logSize, mostRecentAction]);

  useEffect(() => {
    if (filled) {
      Vibration.vibrate(1000);
      navigation.navigate('RideWave');
    }
  }, [filled, navigation]);

  const toast = <Toast>{toastMessage}</Toast>;

  const beacons = useSelector(getBeacons);

  let camera = {};
  Geolocation.getCurrentPosition(({coords, timestamp}) => {
    console.log(coords);
    camera = {
      center: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
      pitch: 30,
      heading: 0,
      zoom: 14,
    };
  });

  const map = useRef(null);

  useEffect(() => {
    if (map.current) {
      setCamera();
    }
  });

  const setCamera = async () => {
    const cameraObj = await map.current.getCamera();
    // Note that we do not have to pass a full camera object to setCamera().
    // Similar to setState(), we can pass only the properties you like to change.
    // Alert.alert('Current camera', JSON.stringify(camera), [{text: 'OK'}], {
    //   cancelable: true,
    // });
    map.current.setCamera({...camera});
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MapView
        provider={PROVIDER_GOOGLE}
        customMapStyle={mapStyle}
        style={{
          width: '100%',
          height: '150%', // Makes center correspond with our center
          position: 'absolute',
        }}
        camera={{
          altitude: 9000,
          pitch: 0,
          heading: 0,
          zoom: 0,
        }}
        ref={map}
      />
      <View style={styles.view}>
        <SafeAreaView>
          <ImageBackground
            source={require('../assets/images/overlay.png')}
            style={styles.view}
            imageStyle={styles.background}>
            {/* We use a col-reverse layout so the pressure bar is layered on top of its sibling components */}
            <AddButton
              // setToastMessage={setToastMessage}
              navigation={navigation}
            />
            <Current />
            {beacons.map(
              (
                {header, body, location, mine, read, type, story, attention},
                idx,
              ) => (
                <Beacon
                  key={idx}
                  idx={idx}
                  content={{header, body}}
                  location={location}
                  type={type}
                  read={read}
                  mine={mine}
                  story={story}
                  attention={attention}
                />
              ),
            )}

            <PressureBar navigation={navigation} />

            <Modal navigation={navigation} />
            {toast}
          </ImageBackground>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column-reverse',
  },
  background: {
    transform: [{translateY: 60}],
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    // fontWeight: '700',
    color: Colors.black,
    fontFamily: 'DMSans-Bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default HomeScreen;
