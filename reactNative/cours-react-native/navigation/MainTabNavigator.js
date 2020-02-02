import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ListVelibStation from '../screens/ListVelibStation';
import MapScreen from '../screens/MapScreen';
import StationDetails from '../screens/StationDetails';

const ListStack = createStackNavigator(
  {
    Home: ListVelibStation,
  }
);

const MainNavigator = createStackNavigator({
    Home: {screen: ListVelibStation},
    Station: {screen: StationDetails},
});

MainNavigator.navigationOptions = {
  tabBarLabel: 'List',
};


export const StationDetailsStack = createStackNavigator(
    {
    Station: {screen: StationDetails}
    }
);

const MapStack = createStackNavigator(
    {
        Links: MapScreen,
    }
);

MapStack.navigationOptions = {
    tabBarLabel: 'Map',
};

export default createBottomTabNavigator({
  MainNavigator,
  MapStack,
});

 export const App = createAppContainer(MainNavigator);


