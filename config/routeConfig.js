import MainScreen from '../screens/MainScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import TeamStandingsScreen from '../screens/TeamStandingsScreen';
import RecentMatchesScreen from '../screens/RecentMatchesScreen';
import PlayerLookupScreen from '../screens/PlayerLookupScreen';
import CreateLeagueScreen from '../screens/CreateLeagueScreen';
import MyLeaguesScreen from '../screens/MyLeaguesScreen';
import JoinLeagueScreen from '../screens/JoinLeagueScreen';
import PlayerScreen from '../screens/PlayerScreen';
import LogoutScreen from '../screens/auth/LogoutScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import LoadingScreen from '../screens/auth/LoadingScreen';
import DraftingScreen from '../screens/DraftingScreen';
import LeagueScreen from '../screens/LeagueScreen';

export default {

  Main: { screen: MainScreen },
  Login: { screen: LoginScreen },
  Register: { screen: RegisterScreen },
  CreateLeague: { screen: CreateLeagueScreen },
  JoinLeague: { screen: JoinLeagueScreen },
  TeamStandings: { screen: TeamStandingsScreen },
  RecentMatches: { screen: RecentMatchesScreen },
  PlayerLookup: { screen: PlayerLookupScreen },
  MyLeauges: { screen: MyLeaguesScreen },
  PlayerScreen: { screen: PlayerScreen },
  Logout: { screen: LogoutScreen },
  Loading: { screen: LoadingScreen },
  Drafting: { screen: DraftingScreen },
  League: { screen: LeagueScreen }

};
