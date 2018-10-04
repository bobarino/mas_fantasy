import React from 'react';
import { ScrollView, Button } from 'react-native';
import routeConfig from '../config/routeConfig';

export default class MainScreen extends React.Component {
    render() {
        const { Main, ...routes } = routeConfig;
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
}
