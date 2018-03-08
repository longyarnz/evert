import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './WelcomeScreen';

export default class SplashScreen extends Component {
  componentDidMount() {
    const view = <WelcomeScreen onState={this.props.onState} />;
    setTimeout(() => {
      this.props.onState({ view });
    }, 2000);
  }

  render() {
    return (
      <View style={styles.splash}>
        <View style={styles.logo}>
          <Text style={styles.logoText}>eVert</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    flex: 1,
    justifyContent: 'center'

  },
  logoText: {
    fontSize: 50,
    backgroundColor: '#000',
    padding: 20,
    color: '#f2f2f2',
    borderRadius: 10,
    fontWeight: '900'
  }
});