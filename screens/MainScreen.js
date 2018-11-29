import React, { Component, } from 'react';
import routeConfig from '../config/routeConfig';
import { MainMenuButton } from "../components/MenuButton.js"
import { StyleSheet, Text } from 'react-native';
import { NavigationEvents } from 'react-navigation';
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
       , Icon } from 'native-base';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';

export default class MainScreen extends Component {
  state = { currentUser: null,
            leagueArr: []
  };

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
        console.log("\nSetting LeagueArr state");
        this.setState({ leagueArr: leagueArr });
      }
    });
  }

  // componentWillReceiveProps(nextProps) {
  //   if (typeof(this.props.navigation.state.params) !== 'undefined') {
  //     newLeague = this.props.navigation.state.params.newLeague;
  //     console.log(newLeague)
  //     this.state.leagueArr.push(newLeague);
  //     this.setState({ leagueArr: leagueArr });
  //   }
  // }
  render() {
    const { currentUser } = this.state;
    const { Main, Register, Login, Loading, ...routes } = routeConfig;
    var currentLeagues = this.state.currentLeagues;

    // if (typeof(this.props.navigation.state.params) !== 'undefined') {
    //   newLeague = this.props.navigation.state.params.newLeague;
    //   console.log(newLeague)
    //   this.state.leagueArr.push(newLeague);
    //   this.setState({ leagueArr: leagueArr });
    // }
    return (
      <Container>
      <NavigationEvents onDidFocus={() => this.componentDidMount()} />
        <Content>
          {
            this.state.leagueArr.map((currentLeague, index) => (
              <MainMenuButton labelText={currentLeague}
                              iconName="group"
                              onPress={()=> this.props.navigation.navigate('League', { currentLeague })}
              />
            ))
          }
          <MainMenuButton labelText="Create League"
                          iconName="plus"
                          onPress={()=> this.props.navigation.navigate('CreateLeague')}
          />
          <MainMenuButton labelText="Join League"
                          iconName="search"
                          onPress={()=> this.props.navigation.navigate('JoinLeague')}
          />
          <OldMainMenuButton labelText="Player Lookup"
                             onPress={()=> this.props.navigation.navigate('PlayerLookup')}
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
    fontSize: 24,
  },
  mainText: {
    color: 'black',
    fontSize: 24
  },
  subText: {
    color: 'gray',
    fontSize: 28
  }
});
