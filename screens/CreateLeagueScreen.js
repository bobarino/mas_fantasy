import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import routeConfig from '../config/routeConfig';
export default class CreateLeagueScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          leagueName: "",
          numTeams: "",
          numPlayers: "",
          password: ""
      };
  }
  render() {
      return (
        <ScrollView style={{ backgroundColor: '#484f4f' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>League Name</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({leagueName: text}) }}
                  placeholder="League Name"
                  autoCorrect={false}
              />

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Number of Teams</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({numTeams: text}) }}
                  placeholder="# of teams"
              />

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Number of Players</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({numPlayers: text}) }}
                  placeholder="# of players per team"
              />

              <Button title="Create League" onPress={() => this.props.navigation.navigate("Main")} />
          </View>
        </ScrollView>
      );
  }
}
