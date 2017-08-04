import ReactNative from 'react-native' ;
import Main from './client';
import { TabNavigator } from 'react-navigation' ;
import {AppRegistry, View, Text, FlatList, Image, StyleSheet,Button } from 'react-native'
import React, {Component} from 'react'
import SocketIOClient from 'socket.io-client/dist/socket.io';
import Messanger from './messanger'
import {List, ListItem} from 'react-native-elements'

class ReceiverScreen extends Component{

  constructor(props){
    super(props);
    this.state={

    };
  }

  static navigationOptions = {
    title: '여행자와의 메시지'}
    render(){
      const { navigate } = this.props.navigation;
      return(
        <View style={styles.container}>
         <FlatList
           data={[
             {key: 'Devin'},
             {key: 'Jackson'},
             {key: 'James'},
             {key: 'Joel'},
             {key: 'John'},
             {key: 'Jillian'},
             {key: 'Jimmy'},
             {key: 'Julie'},
           ]}
           renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
         />
       </View>
     )
   }



  }

  class CarrierScreen extends React.Component{
    static navigationOptions = {
    title: '물품의 위치'}
    render(){
      const { navigate } = this.props.navigation;

    return(
    <View style={styles.container}>
      <Button
      title = ""
      onPress = {() => navigate()}
      />
    </View>
    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: ''
  },
  picture: {
    width:53,
    height:81
  },
  rightContainer:{
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const messageBox = TabNavigator({ 리시버: { screen: ReceiverScreen },
   배달자 : { screen: CarrierScreen } }, { tabBarPosition: 'top', });

export default messageBox;
