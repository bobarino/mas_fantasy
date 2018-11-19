import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';
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
       , Footer
       , Icon } from 'native-base';

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
      numTeams: prevState.numTeams + (sign * 2)
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
        <ScrollView style={{ backgroundColor: 'white' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{color: 'black', padding: 10, fontSize: 24}}>League Name</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  onChangeText={(text) => { this.setState({leagueName: text}) }}
                  placeholder=" League Name"
                  autoCorrect={false}
              />

              <View style={{paddingTop:10}} />
              <Text style={{color: 'black', padding: 10, fontSize: 24}}>Number of Teams</Text>
              <Text style={{color: 'black', padding: 5, fontSize: 24}}>{ this.state.numTeams }</Text>
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
              <Text style={{color: 'black', padding: 10, fontSize: 24}}>Number of Players</Text>
              <Text style={{color: 'black', padding: 5, fontSize: 24}}>{ this.state.numPlayers }</Text>
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
