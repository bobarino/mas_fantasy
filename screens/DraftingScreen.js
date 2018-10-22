import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, ListView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import * as firebase from 'firebase';

var width = Dimensions.get('window').width;
export default class DraftingScreen extends React.Component {
  state = {
    players: [],
    numPlayers: 0
  }

componentDidMount() {
  this.setState({ numPlayers: 6 })
  var playersRef = firebase.database().ref('/players');
  var playersList = [];
  playersRef.once('value').then(snapshot => {
    var totalPlayers = snapshot.numChildren(); //get number of online users
    var indexList = [];
    var randomNr = Math.random() * totalPlayers;
    var playerIndex = parseInt(randomNr, 10);
    for (var i = 0; i < this.state.numPlayers; i++) {
      while (indexList.indexOf(playerIndex) != -1){
        var randomNr = Math.random() * totalPlayers;
        var playerIndex = parseInt(randomNr, 10);
      }
      indexList.push(playerIndex);
    }

    var currentIndex = 0;
    snapshot.forEach(item => {
      if(indexList.indexOf(currentIndex) != -1){
        playersList.push(item.val());
        this.writeUserData(item.val().id, item.val().Name, item.val().Team);
      }
      currentIndex++;
    });
    this.setState({ players: playersList })
  })
}

writeUserData(playerID, name, team) {
  var teamRef = firebase.database().ref('/league/1/users/0/players/' + playerID).set({
    name: name,
    team: team
  });
}

alertItemName = (item) => {
    Alert.alert('Team', item.Team)
 }
  render() {
      return (
        <ScrollView style={{ backgroundColor: '#484f4f' }}>
          <View style={{paddingTop:50, alignItems:"center"}}>

              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 30}}>Congratulations!</Text>

              <View style={{paddingTop:10}} />
              <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Autodraft Results:</Text>

              <View style={{paddingTop:10}}>
              {
                 this.state.players.map((item, index) => (
                    <TouchableOpacity
                       key = {index}
                       style = {styles.container}
                       onPress = {() => this.alertItemName(item)}>
                       <Text style = {styles.text}>
                          {item.Name}
                       </Text>
                    </TouchableOpacity>
                 ))
              }
              </View>

              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Main')}
                >
                <Text style={styles.buttonText}> Finish </Text>
              </TouchableOpacity>
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
