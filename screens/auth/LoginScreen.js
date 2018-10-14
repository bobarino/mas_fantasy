import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { TitledInput } from '../../constants/TitledInput';
import routeConfig from '../../config/routeConfig';
import * as firebase from 'firebase';
export default class LoginScreen extends React.Component {
  state = { email: '', password: '', error: '', loading: false };
  onLoginPress() {
          this.setState({ error: '', loading: true });

          const { email, password } = this.state;
          firebase.auth().signInWithEmailAndPassword(email, password)
              .then(() => { this.props.navigation.navigate("Main") })
              .catch(() => {
                  //Login was not successful, let's create a new account
                  //TODO- Add error message
                  this.props.navigation.navigate("Register")
              });
      }
      render() {
          return (
              <View>
                      <TitledInput
                          label='Email Address'
                          placeholder='you@domain.com'
                          value={this.state.email}
                          onChangeText={email => this.setState({ email })}
                      />
                      <TitledInput
                          label='Password'
                          autoCorrect={false}
                          placeholder='*******'
                          secureTextEntry
                          value={this.state.password}
                          onChangeText={password => this.setState({ password })}
                      />
                      <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                      <Button onPress={this.onLoginPress.bind(this)} title="Log in" />
                      <Button title="Dont have an account? Sign Up." onPress={() => this.props.navigation.navigate("Register")} />

              </View>
          );
      }
  }
  const styles = {
      errorTextStyle: {
          color: '#E64A19',
          alignSelf: 'center',
          paddingTop: 10,
          paddingBottom: 10
      }
  };
