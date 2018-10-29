import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ImageBackground, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
//import { TitledInput } from '../../constants/TitledInput';
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
              <ImageBackground
              style={{flex:1, height: undefined, width: undefined}}
                source={require('../../assets/LoginPageBackground.png')}
                imageStyle={{resizeMode: 'stretch'}}
              >
              <View style={{paddingTop:300, alignItems:"center"}}>
                      <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: "white"}}
                          label='Email Address'
                          placeholder='you@domain.com'
                          value={this.state.email}
                          keyboardType="email-address"
                          autoCapitalize="none"
                          onChangeText={email => this.setState({ email })}
                      />

                      <View style={{paddingTop:10}} />

                      <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: "white"}}
                          label='Password'
                          autoCorrect={false}
                          placeholder='*******'
                          secureTextEntry
                          value={this.state.password}
                          onChangeText={password => this.setState({ password })}
                      />
                      <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.onLoginPress()}
                      >
                        <Text style={styles.buttonText}> Log In </Text>
                      </TouchableOpacity>
                      <View style={{paddingTop:165}} />
                      <Button title="Dont have an account? Sign Up." onPress={() => this.props.navigation.navigate("Register")} />

              </View>
              </ImageBackground>
          );
      }
  }
  const styles = {
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
    },
    buttonText: {
      color: 'white',
      fontSize: 20
    },
    button: {
      alignItems: 'center',
      backgroundColor: 'green',
      padding: 20
    }
  };
