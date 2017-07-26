import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import MyScene from './Activity/Main';

class Main extends Component {
  render()
  {
    return (
      <MyScene />
    )
  }
}

AppRegistry.registerComponent('BackSpace', () => Main);
