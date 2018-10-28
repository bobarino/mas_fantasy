import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';



export default class RecentMatchesScreen extends React.Component {
  state = {
    team1: "",
    team2: "",
    team1score:  0,
    team2score:  0,
    team1record: "",
    team2record: "",
    location: "",
    time:  ""
  }

componentDidMount() {
  var matchesRef = firebase.database().ref('/games/week1/game1');
  matchesRef.once('value').then(snapshot => {
    var team1name = snapshot.val().Team1;
    var team2name = snapshot.val().Team2;
    var onescore = snapshot.val().Team1Score;
    var twoscore = snapshot.val().Team2Score;
    var onerec = snapshot.val().Team1Record;
    var tworec = snapshot.val().Team2Record;
    var loc = snapshot.val().Location;
    var tim = snapshot.val().Time;

    this.setState({team1: team1name, team2: team2name, team1score: onescore, team2score: twoscore,
    team1record: onerec, team2record: tworec, location: loc, time: tim
  })
  })


}
  render() {
    return (
      <View style={styles.parent}>

      
      <Text style={styles.title}>
      RECENT MATCHES</Text>

      <View style={styles.info}>

<Text style={styles.loctext}>
{this.state.location}</Text>
<Text style={styles.timetext}>
{this.state.time}</Text>

</View>
      <View style={styles.container}>

        <View style={styles.box}> 

        <Text style={styles.team1text}>
        {this.state.team1}</Text>
        <Text style={{color: 'antiquewhite', textAlign: 'left', fontSize: 10}}>
        {this.state.team1record}
        </Text>
        <Image style={{marginLeft:90}}source={require('../assets/atlhustle.jpeg')}></Image>
        <Text style={{fontSize: 20, marginLeft:95, color:'antiquewhite'}}>
          {this.state.team1score}
        </Text>
        </View>

        <View style={styles.boxleft}>
        <Text style={styles.team2text}>
        {this.state.team2}</Text>
        <Text style={{color: 'antiquewhite', textAlign: 'right', fontSize: 10}}>
        {this.state.team2record}
        </Text>
        <Image style={{marginLeft: 40}} source={require('../assets/asol.png')}></Image>
        <Text style={{fontSize: 20, marginLeft:45, color:'antiquewhite'}}>
          {this.state.team2score}
        </Text>
        </View>
      </View>
      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#74b9ff'
  },
  info: {
    flexDirection: 'row',
    width: '100%',
    height: 20,
    backgroundColor: 'black',
    marginTop: 20
  },
  loctext: {
    color: 'antiquewhite',
    fontSize: 10,
    textAlign: 'left',
    paddingLeft: 10
  },
  timetext: {
    color: 'antiquewhite',
    fontSize: 10,
    paddingLeft: 140
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#74b9ff'
  },
  title: {
    color: 'antiquewhite',
    fontSize: 35,
    textAlign: 'center'

  },
  box: {
    width: '50%',
    height: 120,
    backgroundColor: '#636e72',

  },
  boxleft: {
    width: '50%',
    height: 120,
    backgroundColor: '#636e72',
    borderLeftWidth: 1,
    borderLeftColor: 'white'

  },
  team1text: {
    color: 'antiquewhite',
    fontSize: 20,
    textAlign: 'left'
  },
  team2text: {
    color: 'antiquewhite',
    fontSize: 20,
    textAlign: 'right'
  }
});

