import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import routeConfig from '../../config/routeConfig';
import * as firebase from 'firebase';


export default class RegisterScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    onSignupPress() {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert("Passwords do not match");
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { this.props.navigation.navigate('Main') }, (error) => { Alert.alert(error.message); });
    }

    render() {
        return (
           <ScrollView style={{ backgroundColor: 'white' }}>
             <View style={{paddingTop:50, alignItems:"center"}}>

                  <Text style={{color: 'black', padding: 10, fontSize: 24}}>Sign Up</Text>
                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder=" Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}) }}
                    placeholder=" Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                    value={this.state.passwordConfirm}
                    onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                    placeholder=" Password (confirm)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{paddingTop:10}} />

                <TouchableOpacity
                 style={styles.button}
                 onPress={() => this.onSignupPress()}
               >
                 <Text style={styles.buttonText}> Register </Text>
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
     marginTop: 20
   }
});
