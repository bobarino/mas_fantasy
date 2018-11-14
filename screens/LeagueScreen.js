import React, { Component, } from 'react';
import routeConfig from '../config/routeConfig';
import { MainMenuButton } from "../components/MenuButton.js";
import { StyleSheet } from 'react-native';
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

export default class LeagueScreen extends Component {
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
          <OldMainMenuButton labelText="This Week"
                             onPress={()=> this.props.navigation.navigate('RecentMatches')}
          />
          <OldMainMenuButton labelText="Leaderboard"
                             onPress={()=> this.props.navigation.navigate('TeamStandings')}
          />
          <OldMainMenuButton labelText="Calendar"
                             onPress={()=> this.props.navigation.navigate('Schedule')}
          />
          <OldMainMenuButton labelText="Trades"
                             onPress={()=> this.props.navigation.navigate('Trade')}
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
    fontSize: 48,
    width: 100,
    height: 100,
    justifyContent: "center",
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
