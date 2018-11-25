import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight, TouchableOpacity,} from 'react-native';
import * as firebase from 'firebase';


export default class RecentMatchesScreen extends React.Component {
  state = {
  	playerStats: []
  }

  componentDidMount() {
  	var stats = [];
  	var player = firebase.database().ref('/players/1/');
  	player.once('value').then(snapshot => {
      snapshot.forEach(item => {
        stats.push(item.val());
      });
    this.setState({ playerStats: stats });
    })
  }
  
  render() {
    return (
    	<View style={{ flex: 1, }}>
    		<ScrollView contentContainerStyle={{flexGrow : 1, justifyContent : 'center', alignItems: 'center'}}>
			    <Image
	    		style={{flex:1, height: 100, width: 100}}
	        	source={require('../assets/danielsperling.jpg')}
	        	resizeMode="contain"
	      		/>
		    
		    
			    
	      		<Text style={{ fontWeight: "bold", color: 'black', fontSize: 25, textAlign: 'center'}}>D. SPERLING</Text>
	    
			    <View style={{ flex: 1, flexDirection: "column", padding: 30, width: 360, }}>
				    
	      			<View />
	      			<View style={{ flex: 1, flexDirection: "row", borderColor: "#b1b6bf", borderWidth: 2, padding: 5}}>
	      				<View style={{ flex: 1, flexDirection: "column", }}>
	      					<Text style={ styles.title2Text }>Personal Stats</Text>
	      					<Text style={ styles.subtitleText }> Height: </Text>
	      					<Text style={ styles.subtitleText }> Birthday </Text>
	      					<Text style={ styles.subtitleText }> College </Text>
	      				</View>
	      				<View style={{ flex: 1, flexDirection: "column", }}>
	      					<Text style= {styles.title2Text}>  </Text>
	      					<Text style={ styles.pStatText }> 5' 10" </Text>
	      					<Text style={ styles.pStatText }> NOV 1, 1996 </Text>
	      					<Text style={ styles.pStatText }> Emory </Text>
	      				</View>
	      			</View>
	      		</View>
      		
		    <View style={styles.pageContainer}>
		      	<View style={{ flex: 1, flexDirection: "column", borderColor: "#b1b6bf", borderWidth: 2, padding: 5, width: 300}}>
		      		<View View style={{ flex: 1, flexDirection: "row", maxHeight: 35, alignItems: 'flex-start'}}>
		      		    <View style={{ flex: 1, flexDirection: "column", padding: 3, maxWidth: 178, alignItems: 'flex-start'}}>
			      			<Text style={ styles.title2Text }>Seasonal Stats</Text>
			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", padding: 3, maxWidth: 60, alignItems: 'flex-start'}}>
			      			<Text style={ styles.title2Text }>2016</Text>
			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", padding: 3, maxWidth: 60, alignItems: 'flex-start'}}>
			      			<Text style={ styles.title2Text }>2017</Text>
			      		</View>
		      		</View>
		      		<View View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-start'}}>
			      		<View style={{ flex: 1, flexDirection: "column", maxWidth: 180, padding: 3, alignItems: 'flex-start'}}>
			      			<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Games Played </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Points Played </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Assists </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Goals </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Blocks </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>+/- </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Completions </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Completion % </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Hockey Assists</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Throwaways</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Stalls</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Offenseive Points Played</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Defensive Points Played</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Drops</Text>
			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", maxWidth: 60, padding: 3, alignItems: 'center'}}>
			      			<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>3 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>52 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>8 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>88.90 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>2</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>0</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>15</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>37</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>0</Text>
			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", maxWidth: 60, padding: 3, alignItems: 'center'}}>
			      			<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>3 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>40 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>2 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>16 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>88.90 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>1</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>2</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>0</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>20</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>20</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>0</Text>
			      		</View>
		      		</View>
		      	</View>
		    </View>
		 </ScrollView>
     	</View>
    );
  }
}
const styles = StyleSheet.create({
  
  
  pageContainer: { padding: 10, flex: 1,},
  searchInputs: { flexDirection: "row" },
  search: { flex: 8, marginBottom: 20, borderColor: "#D44744", borderBottomWidth: 3, padding: 10, backgroundColor:"#e8ecf2" },
  listItem: { padding: 10, borderColor: "#f4cfce", borderWidth: 1, borderRadius: 10, margin: 2, backgroundColor: "#84a7d8" },
  info: { padding: 10, marginTop: 20, borderColor: "#f4cfce", borderWidth: 1 },
  row: { flexDirection: "row", backgroundColor: "#f4cfce" },
  subtitleText: { fontWeight: "bold", color: '#7b7e84', fontSize: 13, textAlign: 'left' },
  title2Text: { fontWeight: "bold", color: 'black', fontSize: 18, textAlign: 'left'},
  pStatText: { fontWeight: "bold", color: '#7b7e84', fontSize: 13, textAlign: 'right' },
  prop: { flex: 1, padding: 10 },
  val: { borderLeftWidth: 1, alignSelf: "center", flex: 2 },
  button: {borderColor: "#722e2c", height: 50, width: 60, backgroundColor: '#D44744', alignItems: 'center'},
  buttonText: {alignItems: 'center'},
});