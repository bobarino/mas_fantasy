import { createStackNavigator } from 'react-navigation';
import routeConfig from './config/routeConfig';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';


firebase.initializeApp(ApiKeys.FirebaseConfig);
const stackRouterConfig = { initialRouteName: 'Loading' };
const Navigator = createStackNavigator(routeConfig, stackRouterConfig);
export default Navigator;
