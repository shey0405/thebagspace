import React, { Component } from 'react';
import {
  Navigator
} from 'react-native-deprecated-custom-components';

import {
  AppRegistry,
    StyleSheet,
    Image,
    Dimensions,
    View, Text
} from 'react-native'

import Login from './Login'
import Main from './Main'
import Choose from './Choose'
import Popup from './Popup'


class TimeerHelper extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      showText: false,
      modalVisible: true
    };

    // Toggle the state every second
    setTimeout(() => {
      this.setState({ showText: true });
    }, 500);
  }

  render() {

    var {height, width} = Dimensions.get('window');



    return(
      !this.state.showText ?
      <Image
        source={require('../img/main_bg.png')}
        style={[loading_style.bg, {width:width, height:height}]}
      >

      </Image>
      :

      <Main/>
    //  <Choose/>
  );
  }
}

const loading_style = StyleSheet.create({
  bg: {
      resizeMode: 'stretch'
  },
  frontblock: {
    flex: 1,
    position: 'absolute',
    alignItems: 'center'
  },
  logo: {
    flex: 1,
    resizeMode: 'center',
  }
});



export default class Loading extends Component {
  render() {



  return (
    <TimeerHelper/>
  )
}
}



AppRegistry.registerComponent('Loading', () => Loading);
