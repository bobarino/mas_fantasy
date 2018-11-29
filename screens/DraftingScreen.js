import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ListView, TouchableOpacity, Dimensions, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';

var width = Dimensions.get('window').width;
export default class DraftingScreen extends React.Component {
  state = {
    leagueName: "",
    players: [],
    numPlayers: 0,
    teamName: "",
    numTeams : 0,
    curTeams: 0,
    matchupFlag: true
  }

componentDidMount() {
  const league = this.props.navigation.state.params.leagueName;
  this.setState({ leagueName: league });
  //Get the number of players from the rules of the league in the database
  var leagueRef = firebase.database().ref('/league/' + league + '/rules');
  leagueRef.once('value').then(snapshot => {
    const numPlayers = snapshot.val().num_players;
    const numTeams = snapshot.val().num_teams;
    this.setState({ numPlayers: numPlayers, numTeams: numTeams });
  });

  //Get the players from the database
  //Create a list of random players with the size being the number of players accessed from the league rules
  var playersRef = firebase.database().ref('/players');
  var playersList = [];
  playersRef.once('value').then(snapshot => {
    var totalPlayers = snapshot.numChildren();
    var indexList = [];
    var randomNr = Math.random() * totalPlayers;
    var playerIndex = parseInt(randomNr, 10);
    for (var i = 0; i < this.state.numPlayers; i++) {
      while (indexList.indexOf(playerIndex) != -1){
        randomNr = Math.random() * totalPlayers;
        playerIndex = parseInt(randomNr, 10);
      }
      indexList.push(playerIndex);
    }

    //Write the new user to the league and the players that were autodrafted
    var currentIndex = 0;
    const userID = firebase.auth().currentUser.uid;
    //Delete players that might already exist there- Don't need implementation for right now
    //var playerDelRef = firebase.database().ref('/league/' + league + '/users/' + userID + '/players').remove();
    snapshot.forEach(item => {
      if(indexList.indexOf(currentIndex) != -1){
        playersList.push(item.val());
        this.writeUserData(this.state.leagueName, userID, item.val().id, item.val().firstName, item.val().lastName, item.val().team);
      }
      currentIndex++;
    });
    this.setState({ players: playersList });
    this.updateUserLeagues(this.state.leagueName, userID)
  })

  //Get Number of users in the league currently. If it is equal to the rule, create initial matchups
  var leagueUsersRef = firebase.database().ref('/league/' + league + '/users');
  leagueUsersRef.once('value').then(snapshot => {
    var currentTeamTotal = snapshot.numChildren();
    this.setState({ curTeams: currentTeamTotal });
  });
}

  writeUserData(leagueName, userID, playerID, firstName, lastName, team) {
    var playerRef = firebase.database().ref('/league/' + leagueName + '/users/' + userID + '/players/' + playerID).set({
      firstName: firstName,
      lastName: lastName,
      id: playerID,
      team: team
    });
  }

  updateUserLeagues(leagueName, userID) {
    var userRef = firebase.database().ref('/users/' + userID + "/leagues/" + leagueName).set({
      name: leagueName
    });
  }

  alertItemName = (item) => {
      Alert.alert('Team', item.team)
   }

   handleFinish() {
     var teamRef = firebase.database().ref('/league/' + this.state.leagueName + '/users/' + firebase.auth().currentUser.uid).update({
       team_name: this.state.teamName
     });
     this.props.navigation.navigate('Main');
   }

   createMatchups() {
     var leagueUsersRef = firebase.database().ref('/league/' + this.state.leagueName + '/users');
     leagueUsersRef.once('value').then(snapshot => {
       //Use this to keep track of even and odds. When you get team a and b, do the push.
       var i = 0;
       var team_a = null;
       var team_b = null;
       snapshot.forEach(item => {
         if (i%2 == 0) {
           team_a = item.key;
         } else {
           team_b = item.key;
           var matchupRef = firebase.database().ref('/league/' + this.state.leagueName + '/matchups/week1/').push({
             team_a: team_a,
             team_b: team_b,
           });
         }
         i++;
       });
     });
   }

  render() {
    const { numTeams, curTeams, matchupFlag } = this.state;

    if (matchupFlag == true && numTeams != 0 && curTeams == numTeams) {
      this.createMatchups()
      this.setState({ matchupFlag: false })
    }
      return (
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{fontWeight: "bold", color: 'black', padding: 10, fontSize: 30}}>Congratulations!</Text>

              <View style={{paddingTop:10}} />
              <Text style={{color: 'black', padding: 10, fontSize: 24}}>Autodraft Results:</Text>

              <View style={{paddingTop:10}}>
              {
                 this.state.players.map((item, index) => (
                    <TouchableOpacity
                       key = {index}
                       style = {styles.container}
                       onPress = {() => this.alertItemName(item)}>
                       <Text style = {styles.text}>
                          {item.firstName + " " + item.lastName}
                       </Text>
                    </TouchableOpacity>
                 ))
              }
              </View>

              <Text style={{color: 'black', padding: 10, fontSize: 24}}>Team Name</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  onChangeText={(text) => { this.setState({teamName: text}) }}
                  placeholder=" Team Name"
                  autoCorrect={false}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleFinish()}
                >
                <Text style={styles.buttonText}> Finish </Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: '#034f84',
      alignItems: 'center',
      width: width
   },
   text: {
      color: 'white'
   },
   buttonText: {
     color: 'white',
     fontSize: 20
   },
   button: {
     alignItems: 'center',
     backgroundColor: '#034f84',
     padding: 20,
     marginTop: 15
   }
})
