import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight, TouchableOpacity,} from 'react-native';
export default class RecentMatchesScreen extends React.Component {
  render() {
    return (
    	<View style={{ flex: 1, backgroundColor: '#484f4f' }}>
		    <View style={{ flex: 1, alignContent:"flex-start", flexDirection: "row", paddingTop:50,}}>
			    <Image
	    		style={{flex:1, height: undefined, width: undefined}}
	        	source={require('../assets/danielsperling.jpg')}
	        	resizeMode="contain"
	      		/>
			    <View style={{ flex: 1, flexDirection: "column"}}>
				    <View style={{ flex: 1, flexDirection: "column", borderColor: "#ffffff", borderWidth: 2, padding: 5}}>
		      			<Text style={{ fontWeight: "bold", color: 'white', fontSize: 25, textAlign: 'left'}}>DANIEL SPERLING</Text>
		     			<Text style={ styles.subtitleText }> Atlanta Hustle </Text>
		     			<Text style={ styles.subtitleText }> #00 </Text>
	      			</View>
	      		    <View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", borderColor: "#ffffff", borderWidth: 2, maxHeight: 35, padding: 3, alignItems: 'flex-start'}}>
	      				<Text style={ styles.title2Text }>PERSONAL STATS</Text>
	      			</View>
	      			<View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "row", borderColor: "#ffffff", borderWidth: 2}}>
	      				<View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", }}>
	      					<Text style={ styles.subtitleText }> Height: </Text>
	      					<Text style={ styles.subtitleText }> Date of Birth </Text>
	      					<Text style={ styles.subtitleText }> College </Text>
	      				</View>
	      				<View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", }}>
	      					<Text style={ styles.pStatText }> 5' 10" </Text>
	      					<Text style={ styles.pStatText }> NOV 1, 1996 </Text>
	      					<Text style={ styles.pStatText }> Emory </Text>
	      				</View>
	      			</View>
	      		</View>
      		</View>
		    <View style={styles.pageContainer}>
		      	<View style={{ flex: 1, flexDirection: "column", borderColor: "#ffffff", borderWidth: 2, padding: 5}}>
		      		<View View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "row", borderColor: "#ffffff", borderWidth: 2, maxHeight: 35, alignItems: 'flex-start'}}>
		      		    <View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", borderColor: "#ffffff", borderWidth: 2,  maxWidth: 155, alignItems: 'flex-start'}}>
			      			<Text style={ styles.title2Text }>SEASONAL STATS</Text>
			      		</View>
		      		</View>
		      		<ScrollView>
		      			<View View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "row", alignItems: 'flex-start'}}>
				      		<View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", borderColor: "#ffffff", borderWidth: 2, maxWidth: 150, padding: 3, alignItems: 'flex-start'}}>
				      			<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Games Played </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Points Played </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Assists </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Goals </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Blocks </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>+/- </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Completions </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Completion % </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Hockey Assists</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Throwaways</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Stalls</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Offenseive Points Played</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Defensive Points Played</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'left'}}>Drops</Text>
				      		</View>
				      		<View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", borderColor: "#ffffff", borderWidth: 2, maxWidth: 50, padding: 3, alignItems: 'flex-start'}}>
				      			<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>3 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>52 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>1 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>1 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>1</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>1 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>8 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>88.90 </Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>2</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>1</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>0</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>15</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>37</Text>
					      		<Text style={{color: 'white', fontSize: 12, textAlign: 'right'}}>0</Text>
				      		</View>
			      		</View>
			      	</ScrollView>
		      	</View>
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
  subtitleText: { fontWeight: "bold", color: '#b7b7b7', fontSize: 13, textAlign: 'left' },
  title2Text: { fontWeight: "bold", color: 'white', fontSize: 18, textAlign: 'left'},
  pStatText: { fontWeight: "bold", color: 'white', fontSize: 13, textAlign: 'right' },
  prop: { flex: 1, padding: 10 },
  val: { borderLeftWidth: 1, alignSelf: "center", flex: 2 },
  button: {borderColor: "#722e2c", height: 50, width: 60, backgroundColor: '#D44744', alignItems: 'center'},
  buttonText: {alignItems: 'center'},
});