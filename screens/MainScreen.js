import React from 'react';
import { ScrollView, Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

import routeConfig from '../config/routeConfig';
import * as firebase from 'firebase';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class MainScreen extends React.Component {
  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser });
  }
  render() {
      const { currentUser } = this.state;
      const { Main, Register, Login, Loading, ...routes } = routeConfig;
      return (
              <View style={styles.container}>
              <ScrollView style={{backgroundColor: '#484f4f'}}>

              <MainMenuButton labelText="Team Standings" linkName="TeamStandings" />
              <MainMenuButton labelText="Recent Matches" linkName="RecentMatches" />
              <MainMenuButton labelText="Player Lookup" linkName="PlayerLookup" />
              <MainMenuButton labelText="My Leauges" linkName="MyLeauges" />
              <MainMenuButton labelText="Create League" linkName="CreateLeague" />
              <MainMenuButton labelText="Join League" linkName="JoinLeague" />
              <MainMenuButton labelText="Logout" linkName="Logout" />

            </ScrollView>
            <AdMobBanner
              style={styles.bottomBanner}
              bannerSize="fullBanner"
              adUnitID="ca-app-pub-3940256099942544/6300978111"
              // Test ID, Replace with your-admob-unit-id
              testDeviceID="EMULATOR"
              didFailToReceiveAdWithError={this.bannerError}
            />
          </View>
        );
    }
}

class MainMenuButton extends React.Component {
    render() {
        return (
          <View style={{paddingTop:3}}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate({this.props.linkName})}
            >
              <Text style={styles.text}> {this.props.labelText} </Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  bottomBanner: {
    position: 'absolute',
    bottom: 0
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#034f84',
    padding: 20
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
