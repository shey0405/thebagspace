import React, { Component } from 'react';
import { Text, View, StyleSheet, Button , Image, TextInput} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
	{ label: '예', value: 0 },
	{ label: '다른 유럽국을 먼저 여행', value: 1 }
];

export default class extends Component {

	constructor(props) {
		super(props)
		this.state = {
			weight_carrier: null,
			prague_arrival: null,
			korea_depart_air: null,
			prague_arrival_air: null,
			name_air: null,
			introduce: null,
			radio_props: { }
		}
	}


	render() {
		return (
			<View style={styles.container}>
				<View style={styles.text_container}>
					<View style={styles.text_box}>
						<Text style={styles.text_box_left}> 남은 캐리어 무게 : </Text>
						<TextInput style= {styles.text_box_right}
						placeholder="kg"
						maxLength = {12}
						autoCorrect= {false}
          	onChangeText={(weight_carrier) => this.setState({weight_carrier})}/>
					</View>

					<View style={styles.text_box}>
						<Text style={styles.text_box_left}> 프라하 도착 날짜 : </Text>
						<TextInput style= {styles.text_box_right}
						placeholder="년/월/일"
						maxLength = {12}
						autoCorrect= {false}
						onChangeText={(prague_arrival) => this.setState({prague_arrival})}/>
					</View>
					<View style={styles.text_box}>
						<Text style={styles.text_box_center}>
						한국에서 바로 프라하 여행입니까?
					  </Text>
						<View style={styles.radioButton_position}>
							<RadioForm
							radio_props={radio_props}
							initial={0}
							formHorizontal={true}
							buttonSize={5}
	    				labelStyle={{fontSize: 10}}
							labelColor={'gray'}
							onPress={(value) => {this.setState({value:value})}}
							/>
					  </View>
					</View>

					<View style={styles.text_box}>
						<Text style={{color:'gray'}}>
						여러분의 비행편을 적어주세요!
						</Text>
			 		</View>

					<View style={styles.text_box}>
						<Text style={styles.text_box_left}> 한국 출발시각 : </Text>
						<TextInput style= {styles.text_box_right}
						autoCorrect= {false}
						placeholder="년/월/일/시/분"
						maxLength = {12}
						onChangeText={(korea_depart_air) => this.setState({korea_depart_air})}/>
					</View>

					<View style={styles.text_box}>
						<Text style={styles.text_box_left}> 프라하 도착시각 : </Text>
						<TextInput style= {styles.text_box_right}
						autoCorrect= {false}
						placeholder="년/월/일/시/분"
						maxLength = {12}
						onChangeText={(prague_arrival_air) => this.setState({prague_arrival_air})}/>
					</View>

					<View style={styles.text_box}>
						<Text style={styles.text_box_left}> 비행기 편명 : </Text>
						<TextInput style= {styles.text_box_right}
						autoCorrect= {false}
						placeholder=" 비행기편명 "
						maxLength = {12}
						onChangeText={(name_air) => this.setState({name_air})}/>
					</View>

					<Text style={styles.text_box_left_bottom_selection}>
					한줄소개 해주세요! (선택)
					</Text>

					<View style={styles.text_box_introduce}>
						<TextInput style= {styles.text_box_right}
						autoCorrect= {false}
						onChangeText={(introduce) => this.setState({ introduce }) }
						//placeholder=" 한줄소개 "
						maxLength = {20}
						/>
					</View>
					<Text style={styles.text_box_left_bottom_comment}>
					한줄소개를 보고 해외거주민께서 여행자를 선택해서 배송을 부탁할 수 있습니다.
					</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'white'
  },
  title: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
	title_image: {
		width: 80,
		height: 20,
		justifyContent: 'center',
		alignItems: 'center',
		resizeMode: 'stretch',
	},
	text_container: {
		//marginTop: 0,
		flexDirection: 'column',
		marginLeft: 20,
		marginBottom: 200,
	},
	text_box: {

		marginBottom: 15,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

	},
	text_box_introduce: {

		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',

	},
	text_box_left: {
		//flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 17,
		color: 'gray',
	},
	text_box_center: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 13,
		color: 'gray',
		marginTop: 5,
	},
	radioButton_position: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 14,
		marginLeft: 1,

	},
	// 텍스트 인풋박스 borderBottomWidth가 안됨.
	text_box_right: {
		flex: 2,
		borderColor: 'gray',
    //borderRadius: 10,
    //borderWidth: 1,
		borderBottomWidth: 1,
    color: '#3D4A53',
    height: 33,
		marginRight: 10,
    //padding: 10

	},
	text_box_bottom: {
		flex:1,
		borderColor: '#86B2CA',
    borderRadius: 10,
    borderWidth: 1,
    color: '#3D4A53',
    height: 60,
		marginRight: 10,
		marginTop: 10,
    padding: 10
	},
	text_box_left_bottom_selection: {
		fontSize: 17,
		marginTop: 20,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		color: 'gray',
	},
	text_box_left_bottom_comment: {
		fontSize: 10,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		color: 'gray',
	},
})
