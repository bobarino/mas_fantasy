import React from 'react';
import { ScrollView, Button } from 'react-native';
import routeConfig from '../config/routeConfig';
import ApiKeys from '../constants/ApiKeys';
import * as firebase from 'firebase';

export default class MainScreen extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        isLoadingComplete: false,
        isAuthenticationReady: false,
        isAuthenticated: false,
      };

      // Initialize firebase...
      if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }

    onAuthStateChanged = (user) => {
      this.setState({isAuthenticationReady: true});
      this.setState({isAuthenticated: !!user});
    }

    render() {
        const { Main, ...routes } = routeConfig;
        if ( (!this.state.isLoadingComplete || !this.state.isAuthenticationReady) && !this.props.skipLoadingScreen) {
            return (
                <ScrollView style={{ marginTop: 20 }}>
                    {Object.keys(routes).map(route => (
                        <Button
                            key={route}
                            title={route}
                            onPress={() => this.props.navigation.navigate(route)}
                        />
                    ))}
                </ScrollView>
            );
        }
        else {
            return (
                <Text>Hi</Text>
            );
        }
    }
}
