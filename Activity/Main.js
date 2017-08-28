import React, { Component } from 'react'
import { Text, View, StyleSheet, AppRegistry, Image } from 'react-native'
import { Action } from 'react-native-router-flux'
import { TabNavigator } from 'react-navigation'
import {ReceiverRouter} from './Router'


export default class Main extends Component {

renderMain(){

	 Actions.ReceiverRouter();

}

	render() {
		return (
			<View style={styles.wrapper}>
				{this.renderMain}
			</View >
		);
	}
}



const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		// flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	tabTextWrap: {
		alignItems: 'center',
		justifyContent: 'center',

	},
	tabText: {
		fontSize: 12
	},
  image: {

    height: 45,
    width: 38,
    resizeMode: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  }
})
//메시지 UI를 컴포넌트로 만드는게 필요할 듯.
//AppRegistry.registerComponent('bagspace', () => AppNavigator);
