import React, { Component } from 'react';
import { Text, View, StyleSheet, AppRegisty, Image, TouchableHighlight, ScrollView} from 'react-native';


export default class Main_MyPage extends Component {

  constructor(props){
    super(props)
  }

  render(){

    return(
			<View style = {styles.container}>

        <View style={styles.title}>
        <Text style={styles.title_text}>프로필 설정</Text>
        </View>

				<View style = {styles.header}>
        <TouchableHighlight>
        <Image
        source = {require('../img/profile_background.png')}
        style = {styles.image_file_background}/>
        </TouchableHighlight>
				</View>

				<View style = {styles.image}>
        <TouchableHighlight
        style= {styles.image_style}>
        <Image
        source = {require('../img/profile_face.png')}
        style = {styles.image_file}/>
        </TouchableHighlight>
        </View>

        <View style = {styles.name}>
        <Text style= {{fontSize:20}}>김소혜</Text>
				</View>
				<View style = {styles.first_floor}>
				<Text style= {styles.text}> 휴대폰번호 </Text>
				</View>
				<View style = {styles.second_floor}>
				<Text style= {styles.text}> 이메일 </Text>
				</View>
				<View style = {styles.third_floor}>
				<Text style= {styles.text}> 주소 </Text>
				</View>
				<View style = {styles.fourth_floor}>
				<Text style= {styles.text}> 자주 가는 여행지 </Text>
				</View>
        <View style = {styles.fourth_floor}>
				<Text style= {styles.text}> 캐리어 크기 및 무게 </Text>
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
  title: {
		flex:1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
  title_text: {
    fontSize:20,
    color:'blue',
  },
	header: {
		flex:2,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		padding:2,
		borderColor: 'gray',
		//borderTopWidth: 1,
		//borderBottomWidth: 1,
	},
  image: {
    flex:0.3,
    flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
  name: {
    flex:0.5,
    flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
    marginBottom: 2,
	},
  text: {
    fontSize: 20,
    marginLeft: 5,
	},
  image_file_background: {
    flex:1,
    resizeMode: 'stretch',
    //borderWidth: 1,
	},
	image_style: {
    height:100,
    width:100,
    borderRadius:50,
    //borderWidth:1,
		justifyContent: 'center',
		alignItems: 'center',
    marginBottom: 70,
	},
  image_file: {
    height:100,
    width:100,
    borderRadius:50,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
	},
	first_floor: {
		flex:0.8,
		justifyContent: 'center',
		borderColor: 'gray',
    borderTopWidth:1,
    borderBottomWidth:1,
    marginBottom: 2,
	},
	second_floor: {
		flex:0.8,
		justifyContent: 'center',
		borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 2,
	},
	third_floor: {
		flex:0.8,
		justifyContent: 'center',
		borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 2,
	},
	fourth_floor: {
		flex:0.8,
		justifyContent: 'center',
		borderColor: 'gray',
    borderBottomWidth:1,
    marginBottom: 2,
	},
})
