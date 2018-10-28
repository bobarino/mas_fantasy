import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight } from 'react-native';
import { SearchableFlatList } from "react-native-searchable-list";


var  items  = [
    {
        id: 1,
        name: 'Joe Richards'
    },
    {
        id: 2,
        name: 'Eric Miner'
    },
    {
        id: 3,
        name: 'Francis Breton'
    },
    {
        id: 4,
        name: 'Miguel Goderre'
    },
    {
        id: 5,
        name: 'Simon Charette'
    },
    {
        id: 6,
        name: 'Shane Earley'
    },
    {
        id: 7,
        name: 'Go'
    },
    {
        id: 8,
        name: 'Swift'
    },
];
export default class PlayerLookupScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          playerName: "",
          resultsTable: "",
          tableHead: ['Name', 'Team', 'Total Points'],
          tableData: [
            ['Joe Richards', 'DC Breeze', '13'],
            ['Eric Miner', 'DC Breeze', '15'],
            ['Francis Breton', 'Montreal Royal', '13'],
            ['Miguel Goderre', 'Montreal Royal', '10'],
            ['Simon Charette', 'Montreal Royal', '9'],
            ['Shane Earley', 'San Jose Spiders', '16'],
          ],
          data: [
            { id: 1, name: 'Joe Richards', team: 'DC Breeze', points: '13'},
            { id: 2, name: 'Eric Miner', team: 'DC Breeze', points: '15'},
            { id: 3, name: 'Francis Breton', team: 'Montreal Royal', points: '13'},
            { id: 4, name: 'Miguel Goderre', team: 'Montreal Royal', points: '10'},
            { id: 5, name: 'Simon Charette', team: 'Montreal Royal', points: '9'},
            { id: 6, name: 'Shane Earley', team: 'San Jose Spiders', points: '16'},
            { id: 7, name: 'Mitchell Bennett', team: 'San Jose Spiders', points: '16'},
            { id: 8, name: 'Dylan Tunnell', team: 'San Jose Spiders', points: '16'},
            { id: 9, name: 'Kurt Gibson', team: 'San Jose Spiders', points: '16'},
            { id: 10, name: 'Michael Egan', team: 'San Jose Spiders', points: '16'},
            { id: 11, name: 'Alexandre  Fall', team: 'San Jose Spiders', points: '16'},
            { id: 12, name: 'Alex Liu', team: 'San Jose Spiders', points: '16'},
            { id: 16, name: 'Eric Miner', team: 'San Jose Spiders', points: '16'},
          ],
          searchTerm: "",
          searchAttribute: "name",
          ignoreCase: true,
      }
  }
  
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 

  render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    return (
      <ScrollView style={{ backgroundColor: '#484f4f' }}>
        <View style={{paddingTop:50, alignItems:"center"}}>

            <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Lookup Player</Text>
            <View style={{paddingTop:10}} />
            <View style={{paddingTop:10}} />
          </View>

        <TextInput
          style={styles.search} placeholder={"Enter Player Name"}
          onChangeText={searchTerm => this.setState({ searchTerm })} />
     
        <SearchableFlatList 
          style={styles.list} data={data} searchTerm={searchTerm}
          searchAttribute={searchAttribute} ignoreCase={ignoreCase}
          renderItem={({ item }) => ( <Text style={styles.listItem}>{item.name}</Text> )}
          keyExtractor={item => item.id} />

        <TouchableHighlight onPress={() => this.props.navigation.navigate("PlayerScreen")}>
        <Image
          style={{flex:1, height:500, width: undefined}}
          source={require('../assets/PlayerList.png')}
          resizeMode="contain"
        />
        </TouchableHighlight>
      </ScrollView>
    );
  }

}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  list: {textAlign:'center', backgroundColor: '#FFF1C1'}
});


