import React, { Component, } from 'react';
import routeConfig from '../config/routeConfig';
import { StyleSheet, Text } from 'react-native';
import * as firebase from 'firebase';
import { Container
       , Header
       , List
       , ListItem
       , Content
       , Left
       , Body
       , Right
       , Col
       , Row
       , Grid
       , Title
       , Button
       , Icon } from 'native-base';

export class MainMenuButton extends React.Component {
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
  icon_lg: {
    fontSize: 24
  },
  mainText: {
    color: 'black',
    fontSize: 24
  },
});
