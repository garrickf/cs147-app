import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Text from '../components/core/text';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from '../components/core/button';
import Card from '../components/core/card';
import AddButton from '../components/add-button';
import ActionBar from '../components/core/action-bar';
import Toast from '../components/core/toast';
import {Provider} from 'react-redux';
import store from '../redux/store';
import Beacon from '../components/beacon';
import Modal from '../components/modal';
import PressureBar from '../components/pressure-bar';

class homeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const [toastMessage, updateToastMessage] = useState('');

    // const setToastMessage = message => {
    //   updateToastMessage(message);
    //   setTimeout(() => {
    //     updateToastMessage('');
    //   }, 4000);
    // };

    // const toast = <Toast>{toastMessage}</Toast>;

    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <ImageBackground
          source={require('../assets/images/map.png')}
          style={styles.view}>
          <SafeAreaView>
            <ImageBackground
              source={require('../assets/images/overlay.png')}
              style={styles.view}
              imageStyle={styles.background}>
              {/* We use a col-reverse layout so the pressure bar is layered on top of its sibling components */}
              <AddButton
                // setToastMessage={setToastMessage}
                navigation={this.props.navigation}
              />

              <Beacon
                content={fakeContent[0]}
                location={fakeLocations[0]}
                viewed
              />

              <Beacon
                content={fakeContent[1]}
                location={fakeLocations[1]}
                type
              />

              <Beacon
                content={fakeContent[0]}
                location={fakeLocations[2]}
                mine
              />

              <PressureBar />

              <Modal />
              {/* {toast} */}
            </ImageBackground>
          </SafeAreaView>
        </ImageBackground>
      </Provider>
    );
  }
}

const fakeContent = [
  {
    header: 'Amazon Rainforest Burning',
    body:
      'Dark clouds of smoke smothered cities in Brazil as parts of the Amazon burned at a rate not seen in years, and.... ',
  },
  {
    header: 'Wave Beach',
    body: null,
  },
];

const fakeLocations = [
  {
    x: 100,
    y: 400,
  },
  {
    x: 200,
    y: 500,
  },
  {
    x: 300,
    y: 600,
  },
];

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

export default homeScreen;
