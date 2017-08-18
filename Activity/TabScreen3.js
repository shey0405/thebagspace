import ReactNative from 'react-native';
import Main from './message/client';
import { StackNavigator } from 'react-navigation';
import { AsyncStorage, AppRegistry, Text, View, Button, Component} from 'react-native'
import React from 'react'
import SocketIOClient from 'socket.io-client/dist/socket.io';
import MessageBox from './message/messagebox';
import ChatWithAdm from './message/messageToAdmin';
import { GiftedChat } from 'react-native-gifted-chat'

const USER_ID = '@userId';
const ADMIN_ID = '@adminId';

class HomeScreen extends React.Component{

  constructor(props){
  super(props);
  this.state={
  receiverId : 'tank',
  username : 'dd',
  administers : 'enoch'
  };
  this.socket = SocketIOClient('http://localhost:3000');
  this.sendReceiverId = this.sendReceiverId.bind(this);
  this.sendAdminId = this.sendAdminId.bind(this);
  //this.sendReceiverId();
  //this.sendAdminId();
  }


  sendReceiverId(){
      AsyncStorage.setItem(USER_ID,'Dowon') //메시지 보내기 페이지에 쓰는 함수
      AsyncStorage.getItem(USER_ID).then(value => {this.setState({"username": JSON.stringify(value)})
      this.socket.emit('sendCarrierId', this.state.username);
      this.socket.emit('sendReceiverId',this.state.receiverId);})
    }


  sendAdminId(){
    AsyncStorage.setItem(ADMIN_ID,'bagspace관리자') //관리자 페이지에 쓰는 함수
    AsyncStorage.getItem(ADMIN_ID).then(value => {this.setState({"administers": JSON.stringify(value)})
    this.socket.emit('sendCarrierId', this.state.username);
    this.socket.emit('sendReceiverId',this.state.administers);})
  }

  static navigationOptions = {
     title: 'message',
     headerStyle:{ backgroundColor: '#AAA' },

   };
   render(){
      const { navigate } = this.props.navigation;
     return (
       <View>

       <Text></Text>
       <Button
       onPress={()=> {
       navigate('Chat1')
       this.sendReceiverId()
       }}
       title = '1:1채팅방'

       />
       <Button
       onPress={()=> {navigate('Chat2')}
       }
       title = '메시지 보관함'
       />
       <Button
       onPress={()=> {navigate('Chat3')
       this.sendAdminId()
       }}
       title = '관리자와의 채팅'
       />
       <Button
       onPress={()=> {navigate('Chat4')}}
       title = '채팅 아바타 실험'/>
       </View>
      )
   }
 }

class BeforeChatWithAdm extends React.Component{
  static navigationOPtions = {
    title: 'practice'
  }
  render(){
    return(
      <View>
      <Button />

      </View>
    )
  }
}
class ExampleAvatar extends React.Component{

constructor(props) {
  super(props);
  this.state = {messages: []};
  this.onSend = this.onSend.bind(this);
}
componentWillMount() {
  this.setState({
    messages: [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        },
      },
    ],
  });
}
onSend(messages = []) {
  this.setState((previousState) => {
    return {
      messages: GiftedChat.append(previousState.messages, messages),
    };
  });
}
render() {
  return (
    <GiftedChat
      messages={this.state.messages}
      onSend={this.onSend}
      user={{
        _id: 1,
      }}
    />
  );
}
}

export const ExamplePage = StackNavigator({
    Home: { screen: HomeScreen },
    Chat1: { screen: Main },
    Chat2: { screen: MessageBox },
    Chat3: { screen: ChatWithAdm },
    Chat4: { screen: ExampleAvatar } });


//AppRegistry.registerComponent('bagspace', () => ExamplePage);
