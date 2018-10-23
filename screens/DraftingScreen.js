import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ListView, TouchableOpacity, Dimensions, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';

var width = Dimensions.get('window').width;
export default class DraftingScreen extends React.Component {
  state = {
    leagueName: "",
    players: [],
    numPlayers: 0,
    teamName: ""
  }

componentDidMount() {
  const league = this.props.navigation.state.params.leagueName;
  this.setState({ leagueName: league });
  //Get the number of players from the rules of the league in the database
  var leagueRef = firebase.database().ref('/league/' + league + '/rules');
  leagueRef.once('value').then(snapshot => {
    const numPlayers = snapshot.val().num_players;
    this.setState({ numPlayers: numPlayers })
  });

  //Get the players from the database (NOTE: Switch to AUDL when given access)
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
        var randomNr = Math.random() * totalPlayers;
        var playerIndex = parseInt(randomNr, 10);
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
        this.writeUserData(this.state.leagueName, userID, item.val().id, item.val().Name, item.val().Team);
      }
      currentIndex++;
    });
    this.setState({ players: playersList })
  })
}

  writeUserData(leagueName, userID, playerID, name, team) {
    var playerRef = firebase.database().ref('/league/' + leagueName + '/users/' + userID + '/players/' + playerID).set({
      name: name,
      team: team
    });
  }

  alertItemName = (item) => {
      Alert.alert('Team', item.Team)
   }

   handleFinish() {
     var teamRef = firebase.database().ref('/league/' + this.state.leagueName + '/users/' + firebase.auth().currentUser.uid).update({
       team_name: this.state.teamName
     });
     this.props.navigation.navigate('Main');
   }

  render() {
      return (
        <ScrollView style={{ backgroundColor: '#484f4f' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 30}}>Congratulations!</Text>

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Autodraft Results:</Text>

              <View style={{paddingTop:10}}>
              {
                 this.state.players.map((item, index) => (
                    <TouchableOpacity
                       key = {index}
                       style = {styles.container}
                       onPress = {() => this.alertItemName(item)}>
                       <Text style = {styles.text}>
                          {item.Name}
                       </Text>
                    </TouchableOpacity>
                 ))
              }
              </View>

              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Team Name</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  onChangeText={(text) => { this.setState({teamName: text}) }}
                  placeholder="Team Name"
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
      backgroundColor: 'white',
      alignItems: 'center',
      width: width
   },
   text: {
      color: 'black'
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
