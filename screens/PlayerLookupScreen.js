import React from 'react';
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight, TouchableOpacity, Alert, FlatList, SafeAreaView } from 'react-native';
import { Table, Row, TableWrapper, Rows, Cell } from 'react-native-table-component';
import  SearchableDropdown from 'react-native-searchable-dropdown';
import {List, ListItem, SearchBar} from 'react-native-elements';


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
          items: [
              {
                  id: 1,
                  name: 'Javascript'
              },
              {
                  id: 2,
                  name: 'Java'
              },
              {
                  id: 3,
                  name: 'Ruby'
              },
              {
                  id: 4,
                  name: 'React Native'
              },
              {
                  id: 5,
                  name: 'PHP'
              },
              {
                  id: 6,
                  name: 'Python'
              },
              {
                  id: 7,
                  name: 'Go'
              },
              {
                  id: 8,
                  name: 'Swift'
              },
          ],
      }
  }
  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 

  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
    return (
      <ScrollView style={{ backgroundColor: '#484f4f' }}>
        <View style={{paddingTop:50, alignItems:"center"}}>

            <Text style={{fontWeight: "bold", color: 'white', padding: 10, fontSize: 20}}>Lookup Player</Text>
            <View style={{paddingTop:10}} />
            <TextInput style={{width: 200, height: 40, borderWidth: 1, backgroundColor: 'white'}}
                value={this.state.email}
                onChangeText={(text) => { this.setState({playerName: text}) }}
                placeholder="Player Name"
                autoCorrect={false}
            />
            <View style={{paddingTop:10}} />

            <Button title="Find Player" onPress={() => this.props.navigation.navigate("Main")} />
          </View>
          <View style={styles.container}>
            <Table borderStyle={{borderColor: 'transparent'}}>
              <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
              {
                state.tableData.map((rowData, index) => (
                  <TableWrapper key={index} style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}>
                    {
                      rowData.map((cellData, cellIndex) => (
                        <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                      ))
                    }
                  </TableWrapper>
                ))
              }
            </Table>
          </View>

        <SearchableDropdown
            
            onItemSelect={(item) =>  alert(JSON.stringify(item))}
            containerStyle={{
                padding: 5
            }}
            textInputStyle={{
                padding: 12,
                borderWidth: 1,
                borderColor: '#ccc',
                borderRadius: 5
            }}
            itemStyle={{
                padding: 10,
                marginTop: 2,
                backgroundColor: '#ddd',
                borderColor: '#bbb',
                borderWidth: 1,
                borderRadius:5
            }}
            itemTextStyle={{
            color: '#222'
            }}
            itemsContainerStyle={{
                maxHeight: 140
            }}
            items={items}
            defaultIndex={2}
            placeholder="Placeholder."
            resetValue={false}
            underlineColorAndroid='transparent' />

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
  btnText: { textAlign: 'center', color: '#fff' }
});


