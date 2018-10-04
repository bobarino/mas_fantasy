import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import TeamStandingsScreen from '../screens/TeamStandingsScreen';
import RecentMatchesScreen from '../screens/RecentMatchesScreen';
import PlayerLookupScreen from '../screens/PlayerLookupScreen';
import LogoutScreen from '../screens/auth/LogoutScreen';

export default {

  Home: { screen: MainScreen },
  TeamStandings: { screen: TeamStandingsScreen },
  RecentMatches: { screen: RecentMatchesScreen },
  PlayerLookup: { screen: PlayerLookupScreen },
  Logout: { screen: LogoutScreen }

};
