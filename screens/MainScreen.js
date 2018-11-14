import React, { Component, } from 'react';
import routeConfig from '../config/routeConfig';
import { ScrollView, Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
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
       , Text
       , Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class MainScreen extends Component {
  state = { currentUser: null };

  componentDidMount() {
    const { currentUser } = firebase.auth();
    this.setState({ currentUser: currentUser});

    //Sets first league as current league
    var myLeaguesRef = firebase.database().ref('/users/' + firebase.auth().currentUser.uid + '/leagues');
    var leagueArr = [];
    myLeaguesRef.once('value').then(snapshot => {
      snapshot.forEach(item => {
          leagueArr.push(item.val().name);
      });
      if (leagueArr.length > 0) {
        this.setState({ currentLeague: leagueArr[0] })
      }
    });
  }
  render() {
    const { currentUser } = this.state;
    const { Main, Register, Login, Loading, ...routes } = routeConfig;
    var currentLeague = this.state.currentLeague;

    if (typeof(this.props.navigation.state.params) !== 'undefined') {
      currentLeague = this.props.navigation.state.params.curLeague;
    }
    if (currentLeague != null) {
      leagueText = <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>League: {currentLeague}</Text>
    } else {
      leagueText = <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>No Leagues Joined</Text>
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title> Header </Title>
          </Body>
        </Header>

        <Content>
          <MainMenuButton mainText="League 1"
                          subText="League 1 Description"
                          onPress={()=> this.props.navigation.navigate('TeamStandings')}
          />
          <MainMenuButton mainText="League 2"
                          subText="League 2 Description"
                          onPress={()=> this.props.navigation.navigate('TeamStandings')}
          />
          <OldMainMenuButton labelText="Team Standings"
                             onPress={()=> this.props.navigation.navigate('TeamStandings')}
          />
          <OldMainMenuButton labelText="Recent Matches"
                             onPress={()=> this.props.navigation.navigate('RecentMatches')}
          />
          <OldMainMenuButton labelText="Player Lookup"
                             onPress={()=> this.props.navigation.navigate('PlayerLookup')}
          />
          <OldMainMenuButton labelText="My Leagues"
                             onPress={()=> this.props.navigation.navigate('MyLeagues')}
          />
          <OldMainMenuButton labelText="Create League"
                             onPress={()=> this.props.navigation.navigate('CreateLeague')}
          />
          <OldMainMenuButton labelText="Join League"
                             onPress={()=> this.props.navigation.navigate('JoinLeague')}
          />
          <OldMainMenuButton labelText="Logout"
                             onPress={()=> this.props.navigation.navigate('Logout')}
          />
        </Content>
        <Footer>
          <AdMobBanner
            style={styles.bottomBanner}
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
          // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
            didFailToReceiveAdWithError={this.bannerError}
          />
        </Footer>
      </Container>
    );
  }
}

class OldMainMenuButton extends React.Component {
  render() {
    const labelText = this.props.labelText;
    const onPress = this.props.onPress;
    return (
      <ListItem style={styles.button} onPress={onPress}>
        <Text style={styles.mainText}> {labelText} </Text>
      </ListItem>
    );
  }
}

class MainMenuButton extends React.Component {
  render() {
    const mainText = this.props.mainText;
    const subText = this.props.subText;
    const onPress = this.props.onPress;

    return (
      <ListItem style={{}} onPress={onPress}>
        <Grid>
          <Col style={{width:200}}>
            <Icon type='FontAwesome' style={styles.icon_lg} name='group'/>
          </Col>
          <Col>
            <Text style={styles.mainText}> {mainText} </Text>
            <Text style={styles.subText}> {subText} </Text>
          </Col>
        </Grid>
      </ListItem>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 20
  },
  bottomBanner: {
    position: 'absolute',
    bottom: 0
  },
  icon_lg: {
    fontSize: 48,
  },
  mainText: {
    color: 'black',
    fontSize: 42
  },
  subText: {
    color: 'gray',
    fontSize: 28
  }
});
