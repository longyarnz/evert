import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './src/components/SplashScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.onState = this.onState.bind(this);
    this.state = {
      quotient: 0, view: <SplashScreen onState={this.onState} />
    }
  }

  onState(state){
    this.setState(state);
  }

  render() {
    return this.state.view
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
