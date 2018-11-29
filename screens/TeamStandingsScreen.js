import React from 'react';
import { StyleSheet, View } from 'react-native';
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
       , Icon
       , Card
       , CardItem } from 'native-base';

import {
 AdMobBanner,
 AdMobInterstitial,
 PublisherBanner,
 AdMobRewarded
} from 'expo';

export default class TeamStandingsScreen extends React.Component {
  state = { teams: [],
            currentLeague: null
          }

  componentDidMount() {
    const currentLeague = this.props.navigation.state.params.currentLeague;
    console.log(currentLeague);
    this.setState({ currentLeague: currentLeague });
    var teams = [];
    var leagueUsersRef = firebase.database().ref('/league/' + currentLeague + '/users');
    leagueUsersRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
        teams.push(item.val().team_name);
      });
      this.setState({ teams: teams });
    });
  }

  render() {
    const { teams, currentLeague } = this.state;
    console.log(teams);
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
            <Left>
              <Text>
                Team
              </Text>
            </Left>
            <Right>
              <Text> Record </Text>
            </Right>
            </CardItem>
            {
              teams.map((team, index) => (
                <CardItem>
                  <Left>
                    <Text> {team} </Text>
                  </Left>
                  <Right>
                    <Text> 0-0 </Text>
                  </Right>
                </CardItem>
              ))
            }
          </Card>
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
  icon_lg: {
    fontSize: 48,
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  mainText: {
    color: 'black',
    fontSize: 42
  },
  subText: {
    color: 'gray',
    fontSize: 28
  },
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  teams: {
    flexDirection: 'row',
  },
  points: {
    flexDirection: 'row',
  },
  teamb: {

    marginTop: 10,
    marginLeft: '45%'
  },
  teama: {
    marginLeft: '15%',
    marginTop: 10
  },
  ascore: {
    marginLeft: '15%',
    fontSize: 30,
    marginTop: 10

  },
  bscore: {
    marginLeft: '50%',
    fontSize: 30,
    marginTop: 10

  },
  vs: {
    marginLeft: '45%',
  }
});
