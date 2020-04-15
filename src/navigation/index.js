import ListingScene from '../scenes/Listing';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Cart from '../scenes/Cart';

const AppNavigator = createStackNavigator(
  {
    Listing: {
      screen: ListingScene,
    },
    Cart: {
      screen: Cart,
    },
  },
  {
    initialRouteName: 'Listing',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
