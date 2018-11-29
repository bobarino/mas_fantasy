import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
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
    let playerScoresA = [];
    let playerScoresB = [];
    let totalScoreA = 0;
    let totalScoreB = 0;
    for (var i = 0; i < playersA.length; i++) {
      randomNr = Math.random() * 60 + 40;
      playerScoresA.push(parseInt(randomNr, 10));
      totalScoreA += parseInt(randomNr, 10);
      randomNr = Math.random() * 60 + 40;
      playerScoresB.push(parseInt(randomNr, 10));
      totalScoreB += parseInt(randomNr, 10);
    }
    // playerScoresA.sort((a,b) => a < b);
    // playerScoresB.sort((a,b) => a < b);
    // console.log(playerScoresA);
    // console.log(currentLeague);

//     return (
//       <View style={styles.parent}>
//
//         <View style={styles.teams}>
//         <Text style={styles.teama}>
//         {nameA}
//         </Text>
//
//         <Text style={styles.teamb}>
//         {nameB}
//         </Text>
//
//         </View>
//         <Image style={styles.vs}source={require('../assets/vsicon.png')}>
//         </Image>
//
//
//         <View style={styles.points}>
//
//         <Text style={styles.ascore}>
//           {totalScoreA}
//         </Text>
//         <Text style={styles.bscore}>
//           {totalScoreB}
//         </Text>
//
//
//         </View>
//
//         <Container>
//          <Content>
//            <Card>
//              <CardItem bordered>
//              <Text>{nameA} Top Players </Text>
//              </CardItem>
//              <CardItem bordered>
//              <Text>{playersA[0].firstName + " " + playersA[0].lastName}</Text>
//              </CardItem>
//              <CardItem bordered>
//              <Text>{playersA[1].firstName + " " + playersA[1].lastName}</Text>
//              </CardItem>
//              <CardItem bordered>
//              <Text>{playersA[2].firstName + " " + playersA[2].lastName}</Text>
//              </CardItem>
//            </Card>
//          </Content>
//        </Container>
//
//        <Container>
//          <Content>
//            <Card>
//              <CardItem bordered>
//              <Text>{nameB} Top Players </Text>
//              </CardItem>
//              <CardItem bordered>
//              <Text>{playersB[0].firstName  + " " + playersB[0].lastName}</Text>
//              </CardItem>
//              <CardItem bordered>
//              <Text>{playersB[1].firstName + " " + playersB[1].lastName}</Text>
//              </CardItem>
//              <CardItem bordered>
//              <Text>{playersB[2].firstName + " " + playersB[2].lastName}</Text>
//              </CardItem>
//            </Card>
//          </Content>
//        </Container>
//
//
//
//
//
//
//
//       </View>
//
//
//
//       // <Container>
//       //   <Content>
//       //     <Card>
//       //       <CardItem>
//       //         <View style={styles.teams}>
//       //         <Text>
//       //           {this.state.teama1} : {this.state.a1score} points
//       //         </Text>
//       //         <Right>
//       //         <Text >
//       //           {this.state.teamb1} : {this.state.b1score} points
//       //         </Text>
//
//       //         </Right>
//
//
//       //         </View>
//
//
//       //       </CardItem>
//       //     </Card>
//       //   </Content>
//       // </Container>
// //       <View style={styles.parent}>
//
//
// //       <Text style={styles.title}>
// //       RECENT MATCHES</Text>
//
// //       <View style={styles.info}>
//
// // <Text style={styles.loctext}>
// // {this.state.location}</Text>
// // <Text style={styles.timetext}>
// // {this.state.time}</Text>
//
// // </View>
// //       <View style={styles.container}>
//
// //         <View style={styles.box}>
//
// //         <Text style={styles.team1text}>
// //         {this.state.team1}</Text>
// //         <Text style={{color: 'antiquewhite', textAlign: 'left', fontSize: 10}}>
// //         {this.state.team1record}
// //         </Text>
// //         <Image style={{marginLeft:90}}source={require('../assets/atlhustle.jpeg')}></Image>
// //         <Text style={{fontSize: 20, marginLeft:95, color:'antiquewhite'}}>
// //           {this.state.team1score}
// //         </Text>
// //         </View>
//
// //         <View style={styles.boxleft}>
// //         <Text style={styles.team2text}>
// //         {this.state.team2}</Text>
// //         <Text style={{color: 'antiquewhite', textAlign: 'right', fontSize: 10}}>
// //         {this.state.team2record}
// //         </Text>
// //         <Image style={{marginLeft: 40}} source={require('../assets/asol.png')}></Image>
// //         <Text style={{fontSize: 20, marginLeft:45, color:'antiquewhite'}}>
// //           {this.state.team2score}
// //         </Text>
// //         </View>
// //       </View>
// //       </View>
//
//     );
//   }
// }
// const styles = StyleSheet.create({
//   parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'white'
//   },
//   teams: {
//     flexDirection: 'row',
//   },
//   points: {
//     flexDirection: 'row',
//   },
//   teamb: {
//
//     marginTop: 10,
//     marginLeft: '45%'
//   },
//   teama: {
//     marginLeft: '15%',
//     marginTop: 10
//   },
//   ascore: {
//     marginLeft: '15%',
//     fontSize: 30,
//     marginTop: 10
//
//   },
//   bscore: {
//     marginLeft: '50%',
//     fontSize: 30,
//     marginTop: 10
//
//   },
//   vs: {
//     marginLeft: '45%',
//   }
//   // info: {
//   //   flexDirection: 'row',
//   //   width: '100%',
//   //   height: 20,
//   //   backgroundColor: 'black',
//   //   marginTop: 20
//   // },
//   // loctext: {
//   //   color: 'antiquewhite',
//   //   fontSize: 10,
//   //   textAlign: 'left',
//   //   paddingLeft: 10
//   // },
//   // timetext: {
//   //   color: 'antiquewhite',
//   //   fontSize: 10,
//   //   paddingLeft: 140
//   // },
//
//   // container: {
//   //   flex: 1,
//   //   flexDirection: 'row',
//   //   backgroundColor: '#74b9ff'
//   // },
//   // title: {
//   //   color: 'antiquewhite',
//   //   fontSize: 35,
//   //   textAlign: 'center'
//
//   // },
//   // box: {
//   //   width: '50%',
//   //   height: 120,
//   //   backgroundColor: '#636e72',
//
//   // },
//   // boxleft: {
//   //   width: '50%',
//   //   height: 120,
//   //   backgroundColor: '#636e72',
//   //   borderLeftWidth: 1,
//   //   borderLeftColor: 'white'
//
//   // },
//
//   // team2text: {
//   //   color: 'antiquewhite',
//   //   fontSize: 20,
//   //   textAlign: 'right'
//   // }
// });

    return (
    <View style={styles.parent}>

      <View style={styles.teams}>
      <Text style={styles.teama}>
      {nameA}
      </Text>

      <Text style={styles.teamb}>
      {nameB}
      </Text>

      </View>
      <Image style={styles.vs}source={require('../assets/vsicon.png')}>
      </Image>


      <View style={styles.points}>

      <Text style={styles.ascore}>
        {totalScoreA}
      </Text>
      <Text style={styles.bscore}>
        {totalScoreB}
      </Text>


      </View>
      <Container>

        <Content>
          <Card>
            <CardItem header>
            <Left>
              <Text>
                {nameA + "'s Players"}
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
                    <Text> {playerScoresA[index]} </Text>
                  </Right>
                </CardItem>
              ))
            }
          </Card>
          <Card>
            <CardItem header>
            <Left>
              <Text>
                {nameB + "'s Players"}
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
                    <Text> {playerScoresB[index]} </Text>
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
      </View>
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
