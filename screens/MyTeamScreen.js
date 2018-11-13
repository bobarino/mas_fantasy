import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ListView, TouchableOpacity, Dimensions, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';

var width = Dimensions.get('window').width;
export default class MyTeamScreen extends React.Component {
  state = {
    leagueName: "",
    players: [],
    teamName: ""
  }

  componentDidMount() {
    const currentLeague = this.props.navigation.state.params.currentLeague;
    this.setState({ leagueName: currentLeague });

    //Get players for team
    const userID = firebase.auth().currentUser.uid;
    var playersList = [];
    var myPlayersRef = firebase.database().ref('/league/' + currentLeague + '/users/' + userID + '/players');
    myPlayersRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
        playersList.push(item.val());
      });
      this.setState({ players: playersList })
    });
    var myTeamNameRef = firebase.database().ref('/league/' + currentLeague + '/users/' + userID);
    myTeamNameRef.once('value').then(snapshot => {
      const teamName = snapshot.val().team_name;
      this.setState({ teamName: teamName })
    });
  }


  render() {
    console.log(this.state.teamName);
    const { leagueName, players, teamName } = this.state;
      return (
        <ScrollView style={{ backgroundColor: '#484f4f' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{fontWeight: "bold", color: 'white', padding: 3, fontSize: 30}}>{teamName}</Text>
              <Text style={{fontWeight: "bold", color: 'white', padding: 3, fontSize: 20}}>{leagueName}</Text>

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Players:</Text>

              <View style={{paddingTop:10}}>
              {
                 players.map((item, index) => (
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
