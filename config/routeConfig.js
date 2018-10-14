import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import TeamStandingsScreen from '../screens/TeamStandingsScreen';
import RecentMatchesScreen from '../screens/RecentMatchesScreen';
import PlayerLookupScreen from '../screens/PlayerLookupScreen';
import LogoutScreen from '../screens/auth/LogoutScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoadingScreen from '../screens/auth/LoadingScreen';

export default {

  Main: { screen: MainScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  TeamStandings: { screen: TeamStandingsScreen },
  RecentMatches: { screen: RecentMatchesScreen },
  PlayerLookup: { screen: PlayerLookupScreen },
  Logout: { screen: LogoutScreen },
  Loading: { screen: LoadingScreen }

};
