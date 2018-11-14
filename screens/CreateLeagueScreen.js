import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class CreateLeagueScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          leagueName: "",
          numTeams: 0,
          numPlayers: 0,
          password: ""
      };
  }

  handleTeams(sign) {
    this.setState((prevState, { numTeams }) => ({
      numTeams: prevState.numTeams + (sign * 1)
    }));
  }

  handlePlayers(sign) {
    this.setState((prevState, { numPlayers }) => ({
      numPlayers: prevState.numPlayers + (sign * 1)
    }));
  }

  createLeague(leagueName, numTeams, numPlayers) {
    var leagueRef = firebase.database().ref('/league/' + leagueName + '/rules/').set({
      num_players: numPlayers,
      num_teams: numTeams
    });
    this.props.navigation.navigate('Drafting', { leagueName });

  }

  render() {
      return (
        <ScrollView style={{ backgroundColor: '#484f4f' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>League Name</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  onChangeText={(text) => { this.setState({leagueName: text}) }}
                  placeholder="League Name"
                  autoCorrect={false}
              />

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Number of Teams</Text>
              <Text style={{fontWeight: "bold", color: 'white', padding: 5, fontSize: 20}}>{ this.state.numTeams }</Text>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.buttonPlusMinus}
                  onPress={() => this.handleTeams(-1)}
                >
                  <Text style={styles.buttonText}> - </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonPlusMinus}
                  onPress={() => this.handleTeams(1)}
                >
                  <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
              </View>

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Number of Players</Text>
              <Text style={{fontWeight: "bold", color: 'white', padding: 5, fontSize: 20}}>{ this.state.numPlayers }</Text>
              <View style={styles.container}>
                <TouchableOpacity
                  style={styles.buttonPlusMinus}
                  onPress={() => this.handlePlayers(-1)}
                >
                  <Text style={styles.buttonText}> - </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.buttonPlusMinus}
                  onPress={() => this.handlePlayers(1)}
                >
                  <Text style={styles.buttonText}> + </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.createLeague(this.state.leagueName, this.state.numTeams, this.state.numPlayers)}
              >
                <Text style={styles.buttonText}> Create League </Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
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
   },
   buttonPlusMinus: {
     alignItems: 'center',
     backgroundColor: '#034f84',
     padding: 15,
     marginLeft: 10,
     marginRight: 10
   }
})
