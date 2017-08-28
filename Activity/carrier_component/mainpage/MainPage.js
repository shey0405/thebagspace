import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, StyleSheet,View, Text } from 'react-native';
//import { employeesFetch } from '../actions';
//import ListItem from './ListItem';

export default class extends Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Text>tabScreen1</Text>
			</View >
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
});
