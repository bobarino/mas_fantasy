import React from 'react';
import { MainMenuButton } from "../components/MenuButton.js";
import { StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import { Container
       , Header
       , List
       , ListItem
       , Content
       , Thumbnail
       , Left
       , Body
       , Right
       , Col
       , Row
       , Grid
       , Title
       , Button
       , Footer
       , Text
       , Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class LeagueScreen extends React.Component {
  state = { currentLeague: null };

  componentDidMount() {
    const league = this.props.navigation.state.params.currentLeague;
    this.setState({ currentLeague: league });
    // const { currentUser } = firebase.auth();
    // this.setState({ currentUser: currentUser});
    //
    // //Sets first league as current league
    // var myLeaguesRef = firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/leagues');
    // var leagueArr = [];
    // myLeaguesRef.once('value').then(snapshot => {
    //   snapshot.forEach(item => {
    //     leagueArr.push(item.val().name);
    //   });
    //   if (leagueArr.length > 0) {
    //     console.log("\nSetting LeagueArr state");
    //     this.setState({ currentLeagues: leagueArr });
    //   }
    // });
  }
  render() {
    const { currentLeague } = this.state;
    // const { Main, Register, Login, Loading, ...routes } = routeConfig;

    // if (typeof(this.props.navigation.state.params) !== 'undefined') {
    //   currentLeagues = this.props.navigation.state.params.curLeagues;
    // }
    //   if (currentLeagues != null) {
    //       leagueText = <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>League: {currentLeagues[0]}</Text>
    //   } else {
    //       leagueText = <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>No Leagues Joined</Text>
    //   }
    return (
      <Container>

        <Content>

        <ListItem icon onPress={()=> this.props.navigation.navigate('MyTeam', { currentLeague })}>
          <Left>
            <Icon active style={styles.icon_lg} type='FontAwesome' name="group"/>
          </Left>
          <Body>
            <Text style={styles.mainText}> My Team </Text>
          </Body>
        </ListItem>

        <ListItem icon onPress={()=> this.props.navigation.navigate('Matchup', { currentLeague })}>
          <Left>
            <Icon active style={styles.icon_lg} type='FontAwesome' name="play"/>
          </Left>
          <Body>
            <Text style={styles.mainText}> This Week </Text>
          </Body>
        </ListItem>

          <MainMenuButton labelText="Leaderboard"
                          iconName="list-ol"
                          onPress={()=> this.props.navigation.navigate('TeamStandings')}
          />
          <MainMenuButton labelText="Calendar"
                          iconName="calendar"
                          onPress={()=> this.props.navigation.navigate('Schedule')}
          />
          <MainMenuButton labelText="Trades"
                          iconName="exchange"
                          onPress={()=> this.props.navigation.navigate('Trade')}
          />
        </Content>
        <Footer>
          <AdMobBanner
            style={styles.bottomBanner}
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
          // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
            didFailToReceiveAdWithError={this.bannerError}
          />
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0
  },
  subText: {
    color: 'gray',
    fontSize: 28
  },
  icon_lg: {
    fontSize: 24
  },
  mainText: {
    color: 'black',
    fontSize: 24
  },
});
