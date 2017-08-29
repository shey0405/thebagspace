import React, { Component } from 'react';
import {Text, TouchableWithoutFeedback, View, Image, } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ReceiverListItem extends Component {

  /*onRowPress(){
    Actions.receiverRequest({ receiver: this.props.receiver });
  }*/

  render(){

    const {items, price, options} = this.props.receiver;

    return(
      <View>
        <View>
        <Text>{items}</Text>
        <Text>{price}</Text>
        <Text>{options}</Text>
        </View>
      </View>

    )
  }
}
