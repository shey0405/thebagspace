import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text,
  AppRegistry,
  Dimensions, Image, TouchableHighlight, Alert
} from 'react-native';


export default class MyScene extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      activate_message: false,
      activate_home: true,
      activate_mypage: false,
      activate_deliver: false,
      activate_position : false,

      deliver_request: false,
      req_num:0,
      dreq_num:0,
    };
  }

  _onPressMessageButton = () => {
      this.setState(
        {
          activate_message:true,
          activate_home : false,
          activate_mypage : false,
          activate_deliver: false,
        }
      );
    }
  _onPressPostionNowButton = () => {
      this.setState(
        {
          activate_message:false,
          activate_position : true,
        }
      );
    }
  _onPressDeliverNowButton = () => {
      this.setState(
        {
          activate_message:true,
          activate_position : false,
        }
      );
    }
  _onPressMyPageButton = () => {
      this.setState(
        {
          activate_message: false,
          activate_home: false,
          activate_mypage: true,
          activate_deliver: false,
        }
      );
    }
  _onPressDeliverButton = () => {
      this.setState(
        {
          activate_message: false,
          activate_home: false,
          activate_mypage: false,
          activate_deliver: true,
        }
      );
    }
  _onPressHomeButton = () => {
    this.setState(
      {
        activate_home:  true,
        activate_message: false,
        activate_mypage: false,
        activate_deliver: false,
      }
    )
  }

  _onPressD1 = () =>{
    this.setState(
      {
        deliver_request: !this.state.deliver_request,
      }
    )

  }
  _onPressR1 = () =>{
    if(this.state.req_num <=3){
    this.setState(
      {
          req_num: this.state.req_num +1,

      })
    }
    else if (this.state.req_num >3){
      this.setState(
      {
          req_num: 0,

      })
    }



  }
  _onPressDR1 = () =>{
    if(this.state.dreq_num <=2){
    this.setState(
      {
          dreq_num: this.state.dreq_num +1,

      })
    }
    else if (this.state.dreq_num >2){
      this.setState(
      {
          dreq_num: 0,

      })
    }



  }


  render() {

var {height, width} = Dimensions.get('window');

//  var message = this.state.activate_message ? require('../img/message_unactive.png') : require(' ../img/message_unactive.png');
var message = this.state.activate_message ? require('../img/message_activate.png') : require('../img/message_unactive.png');
var home = this.state.activate_home ? require('../img/home_active.png') : require('../img/home_unactivate.png');
var mypage = this.state.activate_mypage? require('../img/mypage_active.jpeg') : require('../img/mypage_unactive.png');
var deliver = this.state.activate_deliver? require('../img/request.png') : require('../img/request_black.jpg');
var sourcemade = require('../img/main_receiver.jpg')

if(this.state.activate_home == true){if(this.state.dreq_num==0){sourcemade = require('../img/main_receiver.jpg')}
else if(this.state.dreq_num==1){sourcemade = require('../img/del_req1.jpg')}
else if(this.state.dreq_num==2){sourcemade = require('../img/del_req2.jpg')}
return (


  <View style={styles.main}>

  <View style={styles.title}>
  <Image
    style={styles.title_box}
  >
  </Image>
  <Image
    style={styles.title_box}
    source = {require('../img/title.png')}
  >
  </Image>
  <Image
    style={styles.title_box}
  >
  </Image>
  </View>


    <View style={styles.content}>

    <TouchableHighlight onPress={this._onPressDR1.bind(this)}>

      <Image
        style={styles.content_box_home}
        source={sourcemade}
        >

    </Image>

    </TouchableHighlight>

    </View>

    <View style={styles.icons}>
    <View style={styles.bottom_box_main}>


    <TouchableHighlight onPress={this._onPressHomeButton.bind(this)}>

      <Image
        style={styles.bottom_icon}
        source={home}
      />

    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressDeliverButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={deliver}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMessageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={message}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMyPageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={mypage}
    >
    </Image>
    </TouchableHighlight>





    </View>

    </View>
    </View>
)}
else if(this.state.activate_message == true){  if(this.state.deliver_request== true){sourcemade =require('../img/position.jpeg')}
else sourcemade = require('../img/body_message.png')
return (
  <View style={styles.main}>

  <View style={styles.title}>
  <Image
    style={styles.title_box}
  >
  </Image>
  <Image
    style={styles.title_box}
    source = {require('../img/title.png')}
  >
  </Image>
  <Image
    style={styles.title_box}
  >
  </Image>
  </View>

    <View style={styles.content}>

      <TouchableHighlight onPress={this._onPressD1.bind(this)}>
      <Image
        style={styles.content_box_home}
        source={sourcemade}
        >
    </Image>

        </TouchableHighlight>
    </View>

    <View style={styles.icons}>
    <View style={styles.bottom_box_main}>

    <TouchableHighlight onPress={this._onPressHomeButton.bind(this)}>

      <Image
        style={styles.bottom_icon}
        source={home}
      />

    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressDeliverButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={deliver}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMessageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={message}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMyPageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={mypage}
    >
    </Image>
    </TouchableHighlight>





    </View>

    </View>
    </View>
)}
else if(this.state.activate_mypage == true){ sourcemade = require('../img/request_profile.jpg')
return (
  <View style={styles.main}>

  <View style={styles.title}>
  <Image
    style={styles.title_box}
  >
  </Image>
  <Image
    style={styles.title_box}
    source = {require('../img/title.png')}
  >
  </Image>
  <Image
    style={styles.title_box}
  >
  </Image>
  </View>

    <View style={styles.content}>
      <Image
        style={styles.content_box}
        source={sourcemade}
        >
    </Image>
    </View>

    <View style={styles.icons}>
    <View style={styles.bottom_box_main}>

    <TouchableHighlight onPress={this._onPressHomeButton.bind(this)}>

      <Image
        style={styles.bottom_icon}
        source={home}
      />

    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressDeliverButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={deliver}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMessageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={message}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMyPageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={mypage}
    >
    </Image>
    </TouchableHighlight>





    </View>

    </View>
    </View>
)}
else if(this.state.activate_deliver == true){  if(this.state.req_num == 0){sourcemade = require('../img/receiver_request.jpg')}
else if(this.state.req_num == 1){sourcemade = require('../img/req1.jpg')}
else if(this.state.req_num == 2){sourcemade = require('../img/req2.jpg')}
else if(this.state.req_num == 3){sourcemade = require('../img/req3.jpg')}
else if(this.state.req_num >= 4){sourcemade = require('../img/req4.jpg')}

return (
  <View style={styles.main}>

  <View style={styles.title}>
  <Image
    style={styles.title_box}
  >
  </Image>
  <Image
    style={styles.title_box}
    source = {require('../img/title.png')}
  >
  </Image>
  <Image
    style={styles.title_box}
  >
  </Image>
  </View>

    <View style={styles.content}>

        <TouchableHighlight onPress={this._onPressR1.bind(this)}>


      <Image
        style={styles.content_box_home}
        source={sourcemade}
        >
    </Image>
       </TouchableHighlight>

    </View>

    <View style={styles.icons}>
    <View style={styles.bottom_box_main}>

    <TouchableHighlight onPress={this._onPressHomeButton.bind(this)}>

      <Image
        style={styles.bottom_icon}
        source={home}
      />

    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressDeliverButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={deliver}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMessageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={message}
    >
    </Image>
    </TouchableHighlight>

    <TouchableHighlight onPress={this._onPressMyPageButton.bind(this)}>
    <Image
      style={styles.bottom_icon}
      source={mypage}
    >
    </Image>
    </TouchableHighlight>





    </View>

    </View>
    </View>
)}


  }
}

const styles = StyleSheet.create({
  main:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },

    title: {
      flex: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title_box: {
      flex: 1,
      resizeMode: 'contain',
    },
    content: {
        flex: 1093,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30
    },
    content_box: {
      height: 640,
      resizeMode: 'contain',
      flex: 1,
      marginBottom: 40
    },
    content_box2: {
    //  height: 640,
      resizeMode: 'stretch',
    //  flex: 10,
    //  marginBottom: 40
    },
    content_box_home: {
      height: 640,
      width: 415,
      resizeMode: 'stretch',
      flex: 1,
    //marginBottom: 40
    },
    icons: {
      flex: 90,
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    bottom_box: {
      flex: 1,
      flexDirection : 'row',
      alignItems: 'stretch',

    },
    bottom_box_main: {
      flex: 10,
      flexDirection : 'row',
      alignItems: 'stretch',
      justifyContent: 'space-around'
    },
    bottom_icon:{
      flex: 1,
      width: 40,
      height: 5,

      resizeMode: 'stretch',
    },
    delivernow:{
      height:70,
      width:50,

    }
});

AppRegistry.registerComponent('MyScene', () => MyScene);
