import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import addLinkScreen from './screens/addLinkScreen.js';
import addMediaScreen from './screens/addMediaScreen.js';
import homeScreen from './screens/homeScreen.js';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: homeScreen},
    AddLink: {screen: addLinkScreen},
    AddMedia: {screen: addMediaScreen},
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

const App = createAppContainer(AppNavigator);

export default App;
