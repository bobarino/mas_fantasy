import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import routeConfig from '../../config/routeConfig';
export default class LogoutScreen extends React.Component {
  componentDidMount() {
    firebase.auth().signOut()
    .then(() => { this.props.navigation.navigate("Loading") })
    .catch(() => {
        //Login was not successful, let's create a new account
        //TODO- Add error message
        this.props.navigation.navigate("Login")
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Logging out</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
