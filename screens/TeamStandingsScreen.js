import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import * as firebase from 'firebase';
export default class TeamStandingsScreen extends React.Component {
  state = { teams: undefined }
  constructor(props) {
    super(props);
    this.fireRef = firebase.database().ref('league/1/');
  }
  componentDidMount() {
    this.getTeams(this.fireRef);
  }
  getTeams(fireRef) {
    var that = this;
    fireRef.once('value', function (snapshot) {
      var children = snapshot.val();
      that.setState({ teams: children });
    });
  }
  render() {
    const { teams } = this.state;
    console.log(teams);
    return (
      <ScrollView style={{ marginTop: 20 }}>
        <Text>This is the Team Standings screen!</Text>
      </ ScrollView>
    );
  }
}
