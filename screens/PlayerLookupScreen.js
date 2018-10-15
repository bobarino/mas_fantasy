import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
export default class PlayerLookupScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          playerName: ""
      };
  }
  render() {
    return (
      <View style={{paddingTop:50, alignItems:"center"}}>

          <Text>Lookup Player</Text>
          <View style={{paddingTop:10}} />
          <TextInput style={{width: 200, height: 40, borderWidth: 1}}
              value={this.state.email}
              onChangeText={(text) => { this.setState({playerName: text}) }}
              placeholder="Player Name"
              autoCorrect={false}
          />
          <View style={{paddingTop:10}} />

          <Button title="Find Player" onPress={() => this.props.navigation.navigate("Main")} />
      </View>
    );
  }
}
