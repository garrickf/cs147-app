import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import addLinkScreen from './screens/addLinkScreen.js';
import addMediaScreen from './screens/addMediaScreen.js';
import rideWaveScreen from './screens/rideWaveScreen.js';
import homeScreen from './screens/homeScreen.js';
import {Provider} from 'react-redux';
import store from './redux/store';

/**
 * Creates the navigation for the app, wraps it in a container, then wraps that
 * in a Provider (for redux state).
 */

const AppNavigator = createStackNavigator(
  {
    Home: {screen: homeScreen},
    AddLink: {screen: addLinkScreen},
    AddMedia: {screen: addMediaScreen},
    RideWave: {screen: rideWaveScreen},
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
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
