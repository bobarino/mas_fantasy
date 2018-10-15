import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import routeConfig from '../config/routeConfig';
export default class JoinLeague extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          leagueName: "",
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
              <Text>League Password</Text>
              <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                  value={this.state.password}
                  onChangeText={(text) => { this.setState({password: text}) }}
                  placeholder="Password"
                  secureTextEntry={true}
                  autoCapitalize="none"
                  autoCorrect={false}
              />

              <Button title="Join League" onPress={() => this.props.navigation.navigate("Main")} />
          </View>
      );
  }
}
