/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
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

import Text from './components/core/text';
import Button, {BUTTON_TYPES, BUTTON_COLORS} from './components/core/button';
import Card from './components/core/card';
import AddButton from './components/add-button';
import ActionBar from './components/core/action-bar';
import Toast from './components/core/toast';
import Beacon from './components/beacon';

import store from './redux/store';
import {Provider} from 'react-redux';
import Modal from './components/modal';

const App: () => React$Node = () => {
  // return (
  //   <>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
  //         <View style={styles.body}>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Step Zero (Added)</Text>
  //             <Text style={styles.sectionDescription}>
  //               See some demo stuff here.
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Step One</Text>
  //             <Text style={styles.sectionDescription}>
  //               Edit <Text style={styles.highlight}>App.js</Text> to change this
  //               screen and then come back to see your edits.
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>See Your Changes</Text>
  //             <Text style={styles.sectionDescription}>
  //               <ReloadInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Debug</Text>
  //             <Text style={styles.sectionDescription}>
  //               <DebugInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Learn More</Text>
  //             <Text style={styles.sectionDescription}>
  //               Read the docs to discover what to do next:
  //             </Text>
  //           </View>
  //           <LearnMoreLinks />
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );
  const [toastMessage, updateToastMessage] = useState('');

  // Hacky: we can use set timeout to reset the toast message to be blank.
  // In the future, consider using context or Redux to hoist the state up
  const setToastMessage = message => {
    updateToastMessage(message);
    setTimeout(() => {
      updateToastMessage('');
    }, 4000);
  };

  const toast = <Toast>{toastMessage}</Toast>;

  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <ImageBackground
        source={require('./assets/images/map.png')}
        style={styles.view}>
        <SafeAreaView>
          <ImageBackground
            source={require('./assets/images/overlay.png')}
            style={styles.view}
            imageStyle={styles.background}>
            <View>
              <Card header={'😎 You Do You'}>
                <Text>
                  Sharewaves works by changing as little of what you do as
                  possible. Keep your news reading habits—we’ll log them and
                  recommend actions for when you and those around you feel some
                  kinda way.
                </Text>
              </Card>
              <Card header={'🌊 Ride The Wave!'}>
                <Text>
                  Now that there’s a wave in your area, people are rushing to
                  take action on an issue you care about. We offer options for
                  all skill and energy levels—just swipe to contribute the way
                  you know best!
                </Text>
                <ActionBar>
                  <Button
                    title={'Wait'}
                    type={BUTTON_TYPES.secondary}
                    color={BUTTON_COLORS.coral}
                  />
                  <Button title={'OK'} />
                  <Button title={'OK 2'} />
                </ActionBar>
              </Card>
              <Beacon content={fakeContent[0]} location={fakeLocations[0]} />

              <Beacon content={fakeContent[1]} location={fakeLocations[1]} />
            </View>

            <AddButton setToastMessage={setToastMessage} />

            {toast}

            <Modal />
          </ImageBackground>
        </SafeAreaView>
      </ImageBackground>
    </Provider>
  );
};

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
]

const styles = StyleSheet.create({
  view: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
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

export default App;
