import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as firebase from 'firebase';
import { Container
  , Header
  , List
  , ListItem
  , Content
  , Thumbnail
  , Left
  , Body
  , Right
  , Col
  , Row
  , Grid
  , Title
  , Button
  , Footer
  , Icon,
  Card, CardItem} from 'native-base';



export default class RecentMatchesScreen extends React.Component {
  state = {
    teama1: "",
    teamb1: "",
    a1score:  0,
    b1score:  0,
    aplayers: [],
    bplayers: []
 
  }

componentDidMount() {
 
    var matchupRef = firebase.database().ref('/league/MatchEx/matchups/week1/-LRNlhH-BZdkweCuLsjb');
    matchupRef.once('value').then(snapshot => {
      var teama = snapshot.val().team_a;
      var teamb = snapshot.val().team_b;
      var ascore = snapshot.val().team_a_score;
      var bscore = snapshot.val().team_b_score;

      this.setState({teama1: teama, teamb1: teamb, a1score: ascore, b1score: bscore})


        
    });

    alist = [];
    varPlay = firebase.database().ref('/league/MatchEx/users/1RFUKPrJ9IS32TtdYylFT7BSnQ03/players');
    varPlay.once('value').then(snapshot => {
      snapshot.forEach(item => {
        alist.push(item.val().firstName + " " + item.val().lastName);
      });
      this.setState({aplayers:alist})
    });

    blist = [];
    varPlay = firebase.database().ref('/league/MatchEx/users/HeMv8VaCftNZldQQ6sGbBLlLVDI2/players');
    varPlay.once('value').then(snapshot => {
      snapshot.forEach(item => {
        blist.push(item.val().firstName + " " + item.val().lastName);
      });
      this.setState({bplayers:blist})
    });



}
  render() {
    console.log(this.state.bplayers)
    console.log(this.state.aplayers)
    return (
      <View style={styles.parent}>
        
        <View style={styles.teams}>
        <Text style={styles.teama}>
        {this.state.teama1}
        </Text>
        
        <Text style={styles.teamb}>
        {this.state.teamb1}
        </Text>

        </View>
        <Image style={styles.vs}source={require('../assets/vsicon.png')}>
        </Image>
        

        <View style={styles.points}>
        
        <Text style={styles.ascore}>
          {this.state.a1score}
        </Text>
        <Text style={styles.bscore}>
          {this.state.b1score}
        </Text>
        

        </View>

        <Container>
         <Content>
           <Card>
             <CardItem bordered>
             <Text>{this.state.teama1} Top Players </Text>
             </CardItem>
             <CardItem bordered>
             <Text>{this.state.aplayers[0]}</Text>
             </CardItem>
             <CardItem bordered>
             <Text>{this.state.aplayers[1]}</Text>
             </CardItem>
             <CardItem bordered>
             <Text>{this.state.aplayers[2]}</Text>
             </CardItem>
           </Card>
         </Content>
       </Container>

       <Container>
         <Content>
           <Card>
             <CardItem bordered>
             <Text>{this.state.teamb1} Top Players </Text>
             </CardItem>
             <CardItem bordered>
             <Text>{this.state.bplayers[0]}</Text>
             </CardItem>
             <CardItem bordered>
             <Text>{this.state.bplayers[1]}</Text>
             </CardItem>
             <CardItem bordered>
             <Text>{this.state.bplayers[2]}</Text>
             </CardItem>
           </Card>
         </Content>
       </Container>

        
        


      

      </View>

      

      // <Container>
      //   <Content>
      //     <Card>
      //       <CardItem>
      //         <View style={styles.teams}>
      //         <Text>
      //           {this.state.teama1} : {this.state.a1score} points
      //         </Text>
      //         <Right>
      //         <Text >
      //           {this.state.teamb1} : {this.state.b1score} points
      //         </Text>

      //         </Right>
              

      //         </View>
              
              
      //       </CardItem>
      //     </Card>
      //   </Content>
      // </Container>
//       <View style={styles.parent}>

      
//       <Text style={styles.title}>
//       RECENT MATCHES</Text>

//       <View style={styles.info}>

// <Text style={styles.loctext}>
// {this.state.location}</Text>
// <Text style={styles.timetext}>
// {this.state.time}</Text>

// </View>
//       <View style={styles.container}>

//         <View style={styles.box}> 

//         <Text style={styles.team1text}>
//         {this.state.team1}</Text>
//         <Text style={{color: 'antiquewhite', textAlign: 'left', fontSize: 10}}>
//         {this.state.team1record}
//         </Text>
//         <Image style={{marginLeft:90}}source={require('../assets/atlhustle.jpeg')}></Image>
//         <Text style={{fontSize: 20, marginLeft:95, color:'antiquewhite'}}>
//           {this.state.team1score}
//         </Text>
//         </View>

//         <View style={styles.boxleft}>
//         <Text style={styles.team2text}>
//         {this.state.team2}</Text>
//         <Text style={{color: 'antiquewhite', textAlign: 'right', fontSize: 10}}>
//         {this.state.team2record}
//         </Text>
//         <Image style={{marginLeft: 40}} source={require('../assets/asol.png')}></Image>
//         <Text style={{fontSize: 20, marginLeft:45, color:'antiquewhite'}}>
//           {this.state.team2score}
//         </Text>
//         </View>
//       </View>
//       </View>
      
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  teams: {
    flexDirection: 'row',
  },
  points: {
    flexDirection: 'row',
  },
  teamb: {
    
    marginTop: 10,
    marginLeft: '45%'
  },
  teama: {
    marginLeft: '15%',
    marginTop: 10
  },
  ascore: {
    marginLeft: '15%',
    fontSize: 30,
    marginTop: 10

  },
  bscore: {
    marginLeft: '50%',
    fontSize: 30,
    marginTop: 10

  },
  vs: {
    marginLeft: '45%',
  }
  // info: {
  //   flexDirection: 'row',
  //   width: '100%',
  //   height: 20,
  //   backgroundColor: 'black',
  //   marginTop: 20
  // },
  // loctext: {
  //   color: 'antiquewhite',
  //   fontSize: 10,
  //   textAlign: 'left',
  //   paddingLeft: 10
  // },
  // timetext: {
  //   color: 'antiquewhite',
  //   fontSize: 10,
  //   paddingLeft: 140
  // },

  // container: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   backgroundColor: '#74b9ff'
  // },
  // title: {
  //   color: 'antiquewhite',
  //   fontSize: 35,
  //   textAlign: 'center'

  // },
  // box: {
  //   width: '50%',
  //   height: 120,
  //   backgroundColor: '#636e72',

  // },
  // boxleft: {
  //   width: '50%',
  //   height: 120,
  //   backgroundColor: '#636e72',
  //   borderLeftWidth: 1,
  //   borderLeftColor: 'white'

  // },

  // team2text: {
  //   color: 'antiquewhite',
  //   fontSize: 20,
  //   textAlign: 'right'
  // }
});
