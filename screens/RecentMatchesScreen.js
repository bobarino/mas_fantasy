import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
export default class RecentMatchesScreen extends React.Component {
  render() {
    return (
      <Image
        style={{flex:1, height: undefined, width: undefined}}
        source={require('../assets/TeamScoreComparison5.jpg')}
        resizeMode="contain"
      />
    );
  }
}
