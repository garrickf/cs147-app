import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import addLinkScreen from './screens/addLinkScreen.js';
import addMediaScreen from './screens/addMediaScreen.js';
import homeScreen from './screens/homeScreen.js';
import {Provider} from 'react-redux';
import store from './redux/store';
import { aquaHex } from './styles.js';
import displayPhotoScreen from './screens/displayPhoto.js'

/**
 * Creates the navigation for the app, wraps it in a container, then wraps that
 * in a Provider (for redux state).
 */

const AppNavigator = createStackNavigator(
  {
    Home: {screen: homeScreen,
    navigationOptions: {
      header:null,
      headerBackTitle: ' BACK',
    }},
    AddLink: {screen: addLinkScreen,
      navigationOptions: {
        headerBackTitleStyle: {
          fontFamily:'DM Sans',
          fontWeight:'bold',
        },
        headerTintColor: aquaHex,
        headerTransparent: true,
        }
      },
    AddMedia: {screen: addMediaScreen,
      navigationOptions: {
        headerBackTitleStyle: {
          fontFamily:'DM Sans',
          fontWeight:'bold',
        },
        headerTintColor: aquaHex,
        headerBackTitle: ' CANCEL',
        headerTransparent: true,
        }},
    DisplayPhoto: {screen: displayPhotoScreen,
      navigationOptions: {
        headerBackTitleStyle: {
          fontFamily:'DM Sans',
          fontWeight:'bold',
        },
        headerTintColor: aquaHex,
        headerTransparent: true,
        }},
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
