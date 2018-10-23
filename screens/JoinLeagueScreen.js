import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
export default class JoinLeague extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          leagueName: ""
      };
  }

  handleJoin(leagueName) {
    this.props.navigation.navigate('Drafting', { leagueName });
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

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleJoin(this.state.leagueName)}
              >
                <Text style={styles.buttonText}> Join League </Text>
              </TouchableOpacity>
          </View>
        </ScrollView>
      );
  }
}

const styles = StyleSheet.create ({
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
