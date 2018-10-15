import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
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
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text>League Name</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({leagueName: text}) }}
                  placeholder="League Name"
                  autoCorrect={false}
              />

              <View style={{paddingTop:10}} />
              <Text>Number of Teams</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({numTeams: text}) }}
                  placeholder="# of teams"
              />

              <View style={{paddingTop:10}} />
              <Text>Number of Players</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                  value={this.state.email}
                  onChangeText={(text) => { this.setState({numPlayers: text}) }}
                  placeholder="# of players per team"
              />

              <View style={{paddingTop:10}} />
              <Text>Make League Passowrd</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                  value={this.state.password}
                  onChangeText={(text) => { this.setState({password: text}) }}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
              />

              <Button title="Create League" onPress={() => this.props.navigation.navigate("Main")} />
          </View>
      );
  }
}
