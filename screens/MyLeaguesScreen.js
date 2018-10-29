import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Alert } from 'react-native';
import * as firebase from 'firebase';

var width = Dimensions.get('window').width;

export default class RecentMatchesScreen extends React.Component {

  state = {
    leagueArr: []
  }

  componentDidMount() {
    var myLeaguesRef = firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/leagues');
    var leagueArr = [];
    myLeaguesRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
          leagueArr.push(item.val().name);
      });
      this.setState({ leagueArr: leagueArr })
    });
  }

  alertItemName = (item) => {
      Alert.alert('League', item)
   }

  render() {
    console.log(this.state.leagueArr)
    return (
      <ScrollView style={{ backgroundColor: '#484f4f'}}>
      <View style={{ marginTop: 20, alignItems:"center" }}>
      <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 30}}>Leagues</Text>
      {
         this.state.leagueArr.map((item, index) => (
            <TouchableOpacity
               key = {index}
               style = {styles.container}
               onPress = {() => this.alertItemName(item)}>
               <Text style = {styles.text}>
                  {item}
               </Text>
            </TouchableOpacity>
         ))
      }
      </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
     padding: 20,
     marginTop: 3,
     backgroundColor: 'white',
     alignItems: 'center',
     width: width
  },
   text: {
      color: 'black',
      fontSize: 20
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
