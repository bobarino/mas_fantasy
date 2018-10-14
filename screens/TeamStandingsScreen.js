import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
export default class TeamStandingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.fireRef = firebase.database().ref('league/1/');
  }
  componentDidMount() {
    this.getTeams(this.fireRef);
  }
  getTeams(fireRef) {
    fireRef.once('value', function (snapshot) {
      var children = []
        console.log(snapshot.val())
    });
  }
  render() {
    return (
      <Text>This is the Team Standings screen!</Text>
    );
  }
}
