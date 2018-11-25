 import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ListView, TouchableOpacity, Dimensions, Alert, TextInput } from 'react-native';
import * as firebase from 'firebase';

var width = Dimensions.get('window').width;
export default class MatchupScreen extends React.Component {
  state = {
    teamA: null,
    scoreA: 0,
    teamB: null,
    scoreB: 0
  }

  componentDidMount() {
    const league = this.props.navigation.state.params.currentLeague;
    const userID = firebase.auth().currentUser.uid;
    var matchupRef = firebase.database().ref('/league/' + league + '/matchups/week1/');
    matchupRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
        if (item.val().team_a == userID || item.val().team_b == userID) {
          this.setState({ teamA: item.val().team_a, teamB: item.val().team_b, scoreA: item.val().team_a_score, scoreB: item.val().team_b_score });
        }
      });
    });
  }


  render() {
    console.log(this.state.teamA);
    console.log(this.state.teamB);
      return (
        <ScrollView style={{ backgroundColor: '#484f4f' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>
              <Text style={{fontWeight: "bold", color: 'white', padding: 3, fontSize: 30}}>Matchups</Text>
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
