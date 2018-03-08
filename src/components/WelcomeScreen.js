import React, { Component } from 'react'
import { Text as T, View as V, TextInput, StyleSheet } from 'react-native'
import WorkScreen from './WorkScreen';

export default class WelcomeScreen extends Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this);
    this.state = {
       
    }
  }
  
  submit({ nativeEvent: {text} }){
    this.props.onState({ view: <WorkScreen quotient={text} /> });
  }

  render() {
    return (
      <V style={x.pageContainer}>
        <V style={x.textView}>
          <T style={[x.caption, x.text1]}>HAVE FUN</T>
        </V>
        <V style={x.inputView}>
          <TextInput 
            style={x.input} 
            placeholder="ENTER A NUMBER" 
            keyboardType="phone-pad" 
            onSubmitEditing={this.submit} 
            underlineColorAndroid='#000'
            returnKeyType='done'
          />
        </V>
      </V>
    )
  }
}

const x = StyleSheet.create({
  pageContainer: {
    paddingTop: 30,
    backgroundColor: '#f2f2f2',
    flex: 1,
    justifyContent: 'space-around'
  },
  textView: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  caption: {
    textAlign: 'center'
  },
  text1: {
    fontSize: 30,
    fontWeight: '900',
  },
  text2: {
    fontSize: 20,
    paddingTop: 20,
  },
  inputView: {
    flex: 1,
    padding: 30,
    justifyContent: 'center'
  }, 
  input: {
    padding: 10,
    borderBottomColor: 'black',
    fontWeight: '700',
    

    // borderBottomWidth: 2,
    // borderStyle: 'solid',
  }
});