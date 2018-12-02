import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Image, TouchableHighlight, TouchableOpacity,} from 'react-native';
import * as firebase from 'firebase';


export default class RecentMatchesScreen extends React.Component {
  state = {
  	playerStats: [],
  	id: "",
  	firstName: "",
  	lastName: "",
  	team: "",
  	g: [],
  	g1Stats: [],
  	GameID: "",
	Assists: "",
	Blocks: "",
	Callahan: "",
	CallahansThrown: "",
	Catches: "",
	Completions: "",
	DefensivePointsPlayed: "",
	Drops: "",
	Goals: "",
	HockeyAssists: "",
	OBPulls: "",
	OffensivePointsPlayed: "",
	Opportunities: "",
	Pulls: "",
	Stalls: "",
	Throwaways: "",

	g2Stats: [],
	sAssists: "",
	sBlocks: "",
	sCallahan: "",
	sCallahansThrown: "",
	sCatches: "",
	sCompletions: "",
	sDefensivePointsPlayed: "",
	sDrops: "",
	sGoals: "",
	sHockeyAssists: "",
	sOBPulls: "",
	sOffensivePointsPlayed: "",
	sOpportunities: "",
	sPulls: "",
	sStalls: "",
	sThrowaways: "",

  }

  componentDidMount() {
  	var stats = [];
  	var games = [];
  	var gS = [];
  	var g1 = [];
  	var g2 = [];
  	var g = [];
  	var gameStats = [];
  	var player = firebase.database().ref('/players/aarsenaul/');
  	var game = firebase.database().ref('/player_stats/aarsenaul');
  	var tAssists = 0;
	var tBlocks = 0;
	var tCallahan = 0;
	var tCallahansThrown = 0;
	var tCatches = 0;
	var tCompletions = 0;
	var tDefensivePointsPlayed = 0;
	var tDrops = 0;
	var tGoals = 0;
	var tHockeyAssists = 0;
	var tOBPulls = 0;
	var tOffensivePointsPlayed = 0;
	var tOpportunities = 0;
	var tPulls = 0;
	var tStalls = 0;
	var tThrowaways = 0;
  	
  	player.once('value').then(snapshot => {
      snapshot.forEach(item => {
        stats.push(item.val());
      });
    this.setState({ playerStats: stats });
    this.setState({id: this.state.playerStats[1]});
  	this.setState({firstName: this.state.playerStats[0]});
  	this.setState({lastName: this.state.playerStats[2]});
  	this.setState({team: this.state.playerStats[3]});
    
    });
    game.once('value').then(snapshot => {
    	snapshot.forEach(item => {
        	games.push(item.val());
      	});
    	this.setState({ g: games });
   // tried to loop to sum the stats for all the games, dont have time to figure out 
   // how to do loops.
   //  	for (int i = 0; i < games.length; i++) {
   //  		g = Object.keys(games[i]).map(function(key) {
   //  			return games[i][key];
   //  		});
   //  		tAssists = tAssistsb + g[0];
			// tBlocks = tBlocksb + g[1];
			// tCallahan = tCallahanb + g[2];
			// tCallahansThrown = tCallahansThrown + g[3];
			// tCatches = tCatches + g[4];
			// tCompletions = tCompletions + g[5];
			// tDefensivePointsPlayed = tDefensivePointsPlayed + g[6];
			// tDrops = b +tDrops + g[7];
			// tGoals = b +tGoals + g[9];
			// tHockeyAssists = tHockeyAssists + g[10];
			// tOBPulls = tOBPulls + g[11];
			// tOffensivePointsPlayed = tOffensivePointsPlayed + g[12];
			// tOpportunities = tOpportunities + g[13];
			// tPulls = tPulls + g[15];
			// tStalls = tStalls + g[17];
			// tThrowaways = tThrowaways + g[19];
   //  	}
    	g1 = Object.keys(games[0]).map(function(key) {
    		return games[0][key];
    	});
    	this.setState({g1Stats: g1});
    	this.setState({GameID: this.state.g1Stats[8]});
    	this.setState({Assists: this.state.g1Stats[0]});
    	this.setState({Blocks: this.state.g1Stats[1]});
    	this.setState({Callahan: this.state.g1Stats[2]});
    	this.setState({CallahansThrown: this.state.g1Stats[3]});
    	this.setState({Catches: this.state.g1Stats[4]});
    	this.setState({Completions: this.state.g1Stats[5]});
    	this.setState({DefensivePointsPlayed: this.state.g1Stats[6]});
    	this.setState({Drops: this.state.g1Stats[7]});
    	this.setState({Goals: this.state.g1Stats[9]});
    	this.setState({HockeyAssists: this.state.g1Stats[10]});
    	this.setState({OBPulls: this.state.g1Stats[11]});
    	this.setState({OffensivePointsPlayed: this.state.g1Stats[12]});
    	this.setState({Opportunities: this.state.g1Stats[13]});
    	this.setState({Pulls: this.state.g1Stats[15]});
    	this.setState({Stalls: this.state.g1Stats[17]});
    	this.setState({Throwaways: this.state.g1Stats[19]});

    	g2 = Object.keys(games[1]).map(function(key) {
    		return games[1][key];
    	});
    	this.setState({g2Stats: g2});
    	this.setState({GameID: this.state.g2Stats[8]});
    	this.setState({sAssists: this.state.g2Stats[0]});
    	this.setState({sBlocks: this.state.g2Stats[1]});
    	this.setState({sCallahan: this.state.g2Stats[2]});
    	this.setState({sCallahansThrown: this.state.g2Stats[3]});
    	this.setState({sCatches: this.state.g2Stats[4]});
    	this.setState({sCompletions: this.state.g2Stats[5]});
    	this.setState({sDefensivePointsPlayed: this.state.g2Stats[6]});
    	this.setState({sDrops: this.state.g2Stats[7]});
    	this.setState({sGoals: this.state.g2Stats[9]});
    	this.setState({sHockeyAssists: this.state.g2Stats[10]});
    	this.setState({sOBPulls: this.state.g2Stats[11]});
    	this.setState({sOffensivePointsPlayed: this.state.g2Stats[12]});
    	this.setState({sOpportunities: this.state.g2Stats[13]});
    	this.setState({sPulls: this.state.g2Stats[15]});
    	this.setState({sStalls: this.state.g2Stats[17]});
    	this.setState({sThrowaways: this.state.g2Stats[19]});
    });
    
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
		    
		    	
			    
	      		<Text style={{ fontWeight: "bold", color: 'black', fontSize: 25, textAlign: 'center'}}>{this.state.firstName} {this.state.lastName} </Text>
	    
			    <View style={{ flex: 1, flexDirection: "column", padding: 30, width: 360, }}>
				    
	      			<View />
	      			<View style={{ flex: 1, flexDirection: "row", borderColor: "#b1b6bf", borderWidth: 2, padding: 5}}>
	      				<View style={{ flex: 1, flexDirection: "column", }}>
	      					<Text style={ styles.title2Text }>More Information</Text>
	      					<Text style={ styles.subtitleText }> Team </Text>
	      					<Text style={ styles.subtitleText }> Height: </Text>
	      					<Text style={ styles.subtitleText }> Birthday </Text>
	      					<Text style={ styles.subtitleText }> College </Text>

	      				</View>
	      				<View style={{ flex: 1, flexDirection: "column", }}>
	      					<Text style= {styles.title2Text}>  </Text>
	      					<Text style={ styles.pStatText }> {this.state.team} </Text>
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
			      			<Text style={ styles.title2Text }></Text>
			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", padding: 3, maxWidth: 60, alignItems: 'flex-start'}}>
			      			<Text style={ styles.title2Text }></Text>
			      		</View>
		      		</View>
		      		<View View style={{ flex: 1, flexDirection: "row", alignItems: 'flex-start'}}>
			      		<View style={{ flex: 1, flexDirection: "column", maxWidth: 180, padding: 3, alignItems: 'flex-start'}}>
			      			<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Game ID</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Assists </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Blocks </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Goals </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Callahans </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Callahans Thrown </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Catches </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Completions </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Defensive Points Played </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Drops</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Goals </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Hockey Assists</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>OB Pulls</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Offensive Points Played</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Opportunities </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Pulls </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Stalls</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'left'}}>Throwaways</Text>
			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", maxWidth: 60, padding: 3, alignItems: 'center'}}>
			      			<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>Game 1 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Assists} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Blocks} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Goals}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Callahan} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.CallahansThrown} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Catches}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Completions}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.DefensivePointsPlayed}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Drops}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Goals}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.HockeyAssists}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.OBPulls}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.OffensivePointsPlayed}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Opportunities}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Pulls}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Stalls}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.Throwaways}</Text>

			      		</View>
			      		<View style={{ flex: 1, flexDirection: "column", maxWidth: 60, padding: 3, alignItems: 'center'}}>
			      			<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>Game 2 </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sAssists} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sBlocks} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sGoals}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sCallahan} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sCallahansThrown} </Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sCatches}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sCompletions}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sDefensivePointsPlayed}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sDrops}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sGoals}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sHockeyAssists}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sOBPulls}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sOffensivePointsPlayed}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sOpportunities}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sPulls}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sStalls}</Text>
				      		<Text style={{color: '#7b7e84', fontSize: 12, textAlign: 'right'}}>{this.state.sThrowaways}</Text>
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