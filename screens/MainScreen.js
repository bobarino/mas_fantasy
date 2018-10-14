import React from 'react';
import { ScrollView, Button, Text } from 'react-native';
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
            <ScrollView style={{ marginTop: 20 }}>
            <Text>Hi {currentUser && currentUser.email}!</Text>
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
}
