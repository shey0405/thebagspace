import React, { Component } from 'react'
import { Text, View, StyleSheet, AppRegistry, Image } from 'react-native'
import { Action } from 'react-native-router-flux'
import { TabNavigator } from 'react-navigation'
import {CarrierRouter} from './Router'


export default class Main2 extends Component {

renderMain2(){

	 Actions.CarrierRouter();

}

	render() {
		return (
			<View style={styles.wrapper}>
				{this.renderMain2}
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
