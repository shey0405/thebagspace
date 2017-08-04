import React, { Component } from 'react'
import { Text, View, StyleSheet, AppRegistry, Image } from 'react-native'

import { TabNavigator } from 'react-navigation'

import tabScreen1 from './TabScreen1'
import tabScreen2 from './TabScreen2'
import tabScreen3 from './TabScreen3'
import tabScreen4 from './TabScreen4'

export default AppNavigator = TabNavigator({
	Screen1: {
		screen: tabScreen1,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
          <Image
          style = {styles.image}
          source = {require('../img/home_unactivate.png')} />
				</View>
			),

		}
	},
	Screen2: {
		screen: tabScreen2,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
          <Image
          style={styles.image}
          source={require('../img/enroll_unactive.png')} />
        </View>
			),

		}
	},
	Screen3: {
		screen: tabScreen3,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
          <Image
          style={styles.image}
          source={require('../img/message_unactive.png')} />
				</View>
			),

		}
	},
	Screen4: {
		screen: tabScreen4,
		navigationOptions: {
			tabBarLabel: ({ tintColor }) => (
				<View style={styles.tabTextWrap}>
          <Image
          style={styles.image}
          source={require('../img/mypage_unactive.png')} />
				</View>
			),
		}
	},
}, {
		initialRouteName: 'Screen1',
		tabBarPosition: 'bottom',
		tabBarOptions: {
			activeTintColor: 'red',
			inactiveTintColor: 'black',
			style: {
				borderTopColor: '#f4f4f4',
				borderTopWidth: 1,
        height: 58,
			},
			showIcon: true,
		},
		lazy: true
	});


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

AppRegistry.registerComponent('bagspace', () => AppNavigator);
