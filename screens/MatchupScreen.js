import React from 'react';
import { StyleSheet } from 'react-native';
import { MainMenuButton } from "../components/MenuButton.js";
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

export default class MatchupScreen extends React.Component {
  state = {
    teamA: null,
    scoreA: 0,
    nameA: null,
    teamB: null,
    nameB: null,
    scoreB: 0,
    currentLeague: null,
    playersA: [],
    playersB: []
  }

  componentDidMount() {
    const currentLeague = this.props.navigation.state.params.currentLeague;
    this.setState({ currentLeague: currentLeague });
    const userID = firebase.auth().currentUser.uid;
    var matchupRef = firebase.database().ref('/league/' + currentLeague + '/matchups/week1/');
    matchupRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
        if (item.val().team_a == userID || item.val().team_b == userID) {
          this.setState({ teamA: item.val().team_a, teamB: item.val().team_b, scoreA: item.val().team_a_score, scoreB: item.val().team_b_score });
          this.setNames(item.val().team_a, item.val().team_b, currentLeague);
          this.setPlayers(item.val().team_a, item.val().team_b, currentLeague);
        }
      });
    });
  }

  setNames(teamA, teamB, league) {
    var teamRef = firebase.database().ref('/league/' + league + '/users/' + teamA);
    teamRef.once('value').then(snapshot => {
      this.setState({ nameA: snapshot.val().team_name});
    });

    var teamRef1 = firebase.database().ref('/league/' + league + '/users/' + teamB);
    teamRef1.once('value').then(snapshot => {
      this.setState({ nameB: snapshot.val().team_name});
    });
  }

  setPlayers(teamA, teamB, league) {
    var playersList = [];
    var myPlayersRef = firebase.database().ref('/league/' + league + '/users/' + teamA + '/players');
    myPlayersRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
        playersList.push(item.val());
      });
      this.setState({ playersA: playersList })
    });

    var playersList1 = [];
    var myPlayersRef1 = firebase.database().ref('/league/' + league + '/users/' + teamB + '/players');
    myPlayersRef1.once('value').then(snapshot => {
      snapshot.forEach(item => {
        playersList1.push(item.val());
      });
      this.setState({ playersB: playersList1 })
    });
  }

  // calcScore(playerID) {
  //   var playerScoreRef = firebase.database().ref('/player_stats/' + playerID).orderByKey().limitToFirst(1).once('value').then(snapshot => {
  //     snapshot.forEach(item => {
  //       var score = 0;
  //       item.forEach(i => {
  //         if (i.key != "gameID" && i.key != "playerID" && i.key != "secondsPlayed" && i.key != "teamID") {
  //           score = score + parseFloat(i.val());
  //         }
  //       });
  //       this.setState({ curScore: [...this.state.curScore, score] })
  //     });
  //   });
  // }

  render() {
    const { teamA, teamB, currentLeague, nameA, nameB, playersA, playersB } = this.state;

    return (
      <Container>

        <Content>
          <Card>
            <CardItem header>
            <Left>
              <Text>
                {nameA}
              </Text>
            </Left>
            <Right>
              <Text> Score </Text>
            </Right>
            </CardItem>
            {
              playersA.map((player, index) => (
                <CardItem>
                  <Left>
                    <Text> {player.firstName + " " + player.lastName} </Text>
                  </Left>
                  <Right>
                    <Text>0</Text>
                  </Right>
                </CardItem>
              ))
            }
          </Card>
          <Card>
            <CardItem header>
            <Left>
              <Text>
                {nameB}
              </Text>
            </Left>
            <Right>
              <Text> Score </Text>
            </Right>
            </CardItem>
            {
              playersB.map((player, index) => (
                <CardItem>
                  <Left>
                    <Text> {player.firstName + " " + player.lastName} </Text>
                  </Left>
                  <Right>
                    <Text> 0 </Text>
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
  }
});
