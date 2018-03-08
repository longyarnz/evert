import React, { Component } from 'react'
import { Text as T, View as V, StyleSheet, TextInput as TI, FlatList, TouchableOpacity } from 'react-native'

export default class WorkScreen extends Component {
  constructor(props) {
    super(props)
    this.hardCurrency = [
      { b: 1, key: '₦' }, { b: 1, key: '€' }, { b: 1, key: '£' }, { b: 1, key: '¥' },
      { b: 1, key: '₨' }, { b: 1, key: '₩' }, { b: 1, key: '₱' }, { b: 1, key: '₴' }
    ]

    this.cryptoCurrency = [
      { b: 1, key: '₦' }, { b: 1, key: '€' }, { b: 1, key: '£' }, { b: 1, key: '¥' }
    ]
    
    this.state = {
      data: this.hardCurrency,
      quotient: Number(this.props.quotient)
    }
  }

  componentWillReceiveProps({ quotient }) {
    this.setState({ quotient });
  }
  

  tabs(i){
    const { quotient } = this.state;
    return (
      <TouchableOpacity onPress={() => {}}>
        <V>
          <T>{`${i.key}${Math.floor(quotient/i.b)}`}</T>
        </V>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <V>
        <V>
          <T>N</T>
          <TI value={this.state.quotient} />
        </V>
        <V>
          <V>
            <V onPress={() => this.setState({flatData: this.hardCurrency})}><T>Hard Currency</T></V>
            <V onPress={() => this.setState({flatData: this.cryptoCurrency})}><T>CryptoCurrency</T></V>
          </V>
          <V>
            <FlatList
              data={this.state.data}
              renderItem={i => this.tabs(i)}
            />
          </V>
        </V>
      </V>
    )
  }
}