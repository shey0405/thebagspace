import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegisty, Image} from 'react-native';


export default class Main_MyPage extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
			<View style = {styles.container}>
				<View style = {styles.header}>
				<Text> header </Text>
				</View>
				<View style = {styles.image}>
				<Text> image </Text>
				</View>
				<View style = {styles.first_floor}>
				<Text> 1 </Text>
				</View>
				<View style = {styles.second_floor}>
				<Text> 2 </Text>
				</View>
				<View style = {styles.third_floor}>
				<Text> 3 </Text>
				</View>
				<View style = {styles.fourth_floor}>
				<Text> 4 </Text>
				</View>
			</View>
		)

		}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
		flexDirection: 'column',
  },
	header: {
		flex:2.5,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding:2,
		borderColor: '#86B2CA',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	image: {
		flex:1,
		justifyContent: 'center',
		alignItems: 'center',
		padding:2,
		borderColor: '#86B2CA',
		borderTopWidth: 1,
		borderBottomWidth: 1,
		marginBottom: 50,
	},
	first_floor: {
		flex:0.8,
		justifyContent: 'center',
		padding:2,
		borderColor: '#86B2CA',
		borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	second_floor: {
		flex:0.8,
		justifyContent: 'center',
		padding:2,
		borderColor: '#86B2CA',
		//borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	third_floor: {
		flex:0.8,
		justifyContent: 'center',
		padding:2,
		borderColor: '#86B2CA',
		//borderTopWidth: 1,
		borderBottomWidth: 1,
	},
	fourth_floor: {
		flex:0.8,
		justifyContent: 'center',
		padding:2,
		borderColor: '#86B2CA',
		//borderTopWidth: 1,
		borderBottomWidth: 1,
	},
})
