import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight, TouchableOpacity, Switch, } from 'react-native';
import { SearchableFlatList } from "react-native-searchable-list";


export default class PlayerLookupScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          playerName: "",
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
  handleTeamSearch() {
    this.setState({searchAttribute: "team"})
  }
  handleNameSearch() {
    this.setState({searchAttribute: "name"})
  }
  

  render() {
    const { data, searchTerm, searchAttribute, ignoreCase } = this.state;
    return (

      <View style={{ flex: 1, backgroundColor: '#484f4f' }}>
        <View style={styles.pageContainer}>
          <View style={{paddingTop:50, alignItems:"center"}}>

            <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Lookup Player</Text>
            <View style={{paddingTop:10}} />
            <View style={{paddingTop:10}} />
          </View>
          <View style={styles.searchInputs}>
              <TextInput
                style={styles.search}
                placeholder={"Enter Player Name"}
                onChangeText={searchTerm => this.setState({ searchTerm })}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleNameSearch() }>
                <Text style={styles.buttonText}> Search Players </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.handleTeamSearch()}>
                <Text style={styles.buttonText}> Search Teams </Text>
              </TouchableOpacity>
          </View>
          <ScrollView>
            <SearchableFlatList
              style={styles.list}
              data={data}
              searchTerm={searchTerm}
              searchAttribute={searchAttribute}
              ignoreCase={ignoreCase}
              renderItem={({ item }) => (
                <Text style={styles.listItem}>{item.name}   {item.team}</Text>
              )}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </View>
      </View>

    );
  }

}
 
const styles = StyleSheet.create({
  
  
  pageContainer: { padding: 10, flex: 1, backgroundColor: '#484f4f' },
  searchInputs: { flexDirection: "row" },
  search: { flex: 8, marginBottom: 20, borderColor: "#D44744", borderBottomWidth: 3, padding: 10, backgroundColor:"#e8ecf2" },
  listItem: { padding: 10, borderColor: "#f4cfce", borderWidth: 1, borderRadius: 10, margin: 2, backgroundColor: "#84a7d8" },
  info: { padding: 10, marginTop: 20, borderColor: "#f4cfce", borderWidth: 1 },
  row: { flexDirection: "row", backgroundColor: "#f4cfce" },
  row1: { flexDirection: "row" },
  prop: { flex: 1, padding: 10 },
  val: { borderLeftWidth: 1, alignSelf: "center", flex: 2 },
  button: {borderColor: "#722e2c", height: 50, width: 60, backgroundColor: '#D44744', alignItems: 'center'},
  buttonText: {alignItems: 'center'},
});


