import React from 'react';
import { ScrollView, Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import routeConfig from '../config/routeConfig';
import * as firebase from 'firebase';

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
            <ScrollView style={{backgroundColor: '#484f4f'}}>
              <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>Hi {currentUser && currentUser.email}!</Text>

              <View style={{paddingTop:10}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('TeamStandings')}
                >
                <Text style={styles.text}> Team Standings </Text>
              </TouchableOpacity>

              <View style={{paddingTop:3}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('RecentMatches')}
                >
                <Text style={styles.text}> Recent Matches </Text>
              </TouchableOpacity>

              <View style={{paddingTop:3}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('PlayerLookup')}
                >
                <Text style={styles.text}> Player Lookup </Text>
              </TouchableOpacity>

              <View style={{paddingTop:3}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('MyLeauges')}
                >
                <Text style={styles.text}> My Leagues </Text>
              </TouchableOpacity>

              <View style={{paddingTop:3}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('CreateLeague')}
                >
                <Text style={styles.text}> Create League </Text>
              </TouchableOpacity>

              <View style={{paddingTop:3}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('JoinLeague')}
                >
                <Text style={styles.text}> Join League </Text>
              </TouchableOpacity>

              <View style={{paddingTop:3}} />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Logout')}
                >
                <Text style={styles.text}> Logout </Text>
              </TouchableOpacity>

            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#034f84',
    padding: 20
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  text: {
    color: 'white',
    fontSize: 20
  }
})
