import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator, HeaderBackButton} from 'react-navigation-stack';
import addLinkScreen from './screens/addLinkScreen.js';
import addMediaScreen from './screens/addMediaScreen.js';
import rideWaveScreen from './screens/rideWaveScreen.js';
import homeScreen from './screens/homeScreen.js';
import beachCleanScreen from './screens/beachClean.js';
import bookClubScreen from './screens/bookClub.js';
import rallyScreen from './screens/rally.js';
import {Provider} from 'react-redux';
import store from './redux/store';
import {aquaHex} from './styles.js';
import displayPhotoScreen from './screens/displayPhotoScreen.js';
import viewImageScreen from './screens/viewImageScreen';

import {Alert} from 'react-native';
/**
 * Creates the navigation for the app, wraps it in a container, then wraps that
 * in a Provider (for redux state).
 */

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: {
        header: null,
        headerBackTitle: ' BACK',
      },
    },
    AddLink: {
      screen: addLinkScreen,
      navigationOptions: {
        headerBackTitleStyle: {
          fontFamily: 'DM Sans',
          fontWeight: 'bold',
        },
        headerTintColor: aquaHex,
        headerTransparent: true,
      },
    },
    AddMedia: {
      screen: addMediaScreen,
      navigationOptions: {
        headerBackTitleStyle: {
          fontFamily: 'DM Sans',
          fontWeight: 'bold',
        },
        headerTintColor: aquaHex,
        headerTransparent: true,
      },
    },
    RideWave: {
      screen: rideWaveScreen,
    },
    BeachClean: {
      screen: beachCleanScreen,
    },
    Rally: {
      screen: rallyScreen,
    },
    BookClub: {
      screen: bookClubScreen,
    },
    DisplayPhoto: {
      screen: displayPhotoScreen,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <HeaderBackButton
            tintColor={aquaHex}
            text="Cancel"
            onPress={() => {
              Alert.alert(
                'Are you sure you want to go back?',
                'This image will not be saved.',
                [
                  {
                    text: 'No',
                    style: 'cancel',
                  },
                  {
                    text: 'Yes',
                    onPress: () => navigation.goBack(null),
                  },
                ],
              );
            }}
          />
        ),
        headerTransparent: true,
      }),
    },
    ViewImage: {
      screen: viewImageScreen,
      navigationOptions: {
        headerBackTitleStyle: {
          fontFamily: 'DM Sans',
          fontWeight: 'bold',
        },
        headerTintColor: aquaHex,
        headerTransparent: true,
      },
    },
  },
  {
    initialRouteName: 'Home',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
      },
    }),
  },
);

const Container = createAppContainer(AppNavigator);

const App = () => (
  <Provider store={store}>
    <Container />
  </Provider>
);

export default App;
