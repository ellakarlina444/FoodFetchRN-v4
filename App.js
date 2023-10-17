import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';

const container=createStackNavigator(
  {
    Search:SearchScreen,
    resultShowScreen: ResultShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title:'Business Search',
    }
  });

export default createAppContainer(container);