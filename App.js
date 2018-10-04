import { StackNavigator } from 'react-navigation';
import routeConfig from './config/routeConfig';
import ApiKeys from './constants/ApiKeys';
import * as firebase from 'firebase';


firebase.initializeApp(ApiKeys.FirebaseConfig);
export default StackNavigator(routeConfig);
