import React, { Component, } from 'react';
import routeConfig from '../config/routeConfig';
import { StyleSheet, Text } from 'react-native';
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
        console.log("\nSetting LeagueArr state");
        this.setState({ currentLeagues: leagueArr });
      }
    });
  }
  renderLeagues() {
    var currentLeagues = this.state.currentLeagues;
    if (currentLeagues != null) {
      currentLeagues.map((prop) => {
        console.log("\nCurrent Prop: ", prop);
        return (
          <MainMenuButton labelText={prop}

                          onPress={()=> this.props.navigation.navigate('TeamStandings')}
          />
        );
      })
    }
  }
  render() {
    const { currentUser } = this.state;
    const { Main, Register, Login, Loading, ...routes } = routeConfig;
    var currentLeagues = this.state.currentLeagues;

    if (typeof(this.props.navigation.state.params) !== 'undefined') {
      currentLeagues = this.props.navigation.state.params.curLeagues;
    }
    if (currentLeagues != null) {
      leagueText = <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>League: {currentLeagues[0]}</Text>
    } else {
      leagueText = <Text style={{fontWeight: "bold", color: 'white', padding: 10}}>No Leagues Joined</Text>
    }
    return (
      <Container>
        <Content>
          <MainMenuButton labelText="League 1"
                          iconName="group"
                          onPress={()=> this.props.navigation.navigate('League')}
          />
          { this.renderLeagues() }
          <MainMenuButton labelText="League 2"
                          iconName="group"
                          onPress={()=> this.props.navigation.navigate('League')}
          />
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

class MainMenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labelText: props.labelText,
      onPress: props.onPress,
      iconName: props.iconName
    };
  }

  componentDidMount() {
    this.setState({
      labelText: this.props.labelText,
      onPress: this.props.onPress,
      iconName: this.props.iconName
    });
  }
  render() {
    const labelText = this.state.labelText;
    const onPress = this.state.onPress;
    const iconName = this.state.iconName;

    return (
      <ListItem icon onPress={onPress}>
        <Left>
          <Icon active style={styles.icon_lg} type='FontAwesome' name={iconName}/>
        </Left>
        <Body>
          <Text style={styles.mainText}> {labelText} </Text>
        </Body>
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
