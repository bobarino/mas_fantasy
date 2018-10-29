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
		     			<Text style={ styles.subtitleText}>Atlanta Hustle</Text>
		     			<Text style={ styles.subtitleText}>#00</Text>
	      			</View>
	      		    <View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", borderColor: "#ffffff", borderWidth: 2, maxHeight: 35, padding: 3, alignItems: 'flex-start'}}>
	      				<Text style={{fontWeight: "bold", color: 'white', fontSize: 18, textAlign: 'left'}}>PERSONAL STATS</Text>
	      			</View>
	      			<View style={{ flex: 1, backgroundColor: '6ced68', flexDirection: "column", borderColor: "#ffffff", borderWidth: 2}}>
	      			</View>
	      		</View>
      		</View>
		    <View style={styles.pageContainer}>
		 
		      <ScrollView>
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
  subtitleText: { fontWeight: "bold", color: '#b7b7b7', fontSize: 13, textAlign: 'left'},
  prop: { flex: 1, padding: 10 },
  val: { borderLeftWidth: 1, alignSelf: "center", flex: 2 },
  button: {borderColor: "#722e2c", height: 50, width: 60, backgroundColor: '#D44744', alignItems: 'center'},
  buttonText: {alignItems: 'center'},
});