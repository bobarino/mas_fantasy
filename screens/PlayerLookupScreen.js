import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight } from 'react-native';
export default class PlayerLookupScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          playerName: ""
      };
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#484f4f' }}>
        <View style={{paddingTop:50, alignItems:"center"}}>

            <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Lookup Player</Text>
            <View style={{paddingTop:10}} />
            <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({playerName: text}) }}
                placeholder="Player Name"
                autoCorrect={false}
            />
            <View style={{paddingTop:10}} />

            <Button title="Find Player" onPress={() => this.props.navigation.navigate("Main")} />
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate("PlayerScreen")}>
        <Image
          style={{flex:1, height:500, width: undefined}}
          source={require('../assets/PlayerList.png')}
          resizeMode="contain"
        />
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
