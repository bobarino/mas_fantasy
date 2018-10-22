import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
export default class RecentMatchesScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#484f4f'}}>
      <View style={{ marginTop: 20, alignItems:"center" }}>
          <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}> League 1 </Text>
          <View style={{paddingTop:10}} />
          <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}> League 2 </Text>
          <View style={{paddingTop:10}} />
          <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}> League 3 </Text>
        </View>
        </ScrollView>
    );
  }
}
