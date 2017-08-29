import React, {Component} from 'react';
import { AppRegistry, Text, View, Image } from 'react-native'
import { Scene, Router, Actions, TabBar, Tabs, Overlay } from 'react-native-router-flux';
import FirstPage from './FirstPage'

import MainPage_R from './receiver_component/mainpage/CarrierList';
import MessagePage_R from './receiver_component/message/MessagePage';
import MyPage_R from './receiver_component/mypage/MyPage';
import RegisterPage_R from './receiver_component/registerpage/RegisterPageRC';

import MainPage_C from './carrier_component/mainpage/ReceiverList';
import MessagePage_C from './carrier_component/message/MessagePage';
import MyPage_C from './carrier_component/mypage/MyPage';
import RegisterPage_C from './carrier_component/registerpage/RegisterPageCR';




const MainTabIcon = (props) => {
  return (
    //<Text style={{color: props.focused ? 'red' : 'black'}}>{props.title}</Text>
  <View>
    <Image style= {{height:40, width:32, resizeMode:'stretch'}}source={props.focused? require('../img/home_active.png') : require('../img/home_unactive.png')  } />
  </View>
)
};

const MessageTabIcon = (props) => {
  return (
    //<Text style={{color: props.focused ? 'red' : 'black'}}>{props.title}</Text>
  <View>
    <Image style= {{height:40, width:33, resizeMode:'stretch'}}source={props.focused? require('../img/message_activate.png') : require('../img/message_unactive.png')  } />
  </View>
)
};

const RegisterTabIcon = (props) => {
  return (
    //<Text style={{color: props.focused ? 'red' : 'black'}}>{props.title}</Text>
  <View>
    <Image style= {{height:45, width:35, resizeMode:'stretch'}}source={props.focused? require('../img/request.png') : require('../img/request_black.jpg')  } />
  </View>
)
};

const MyTabIcon = (props) => {
  return (
    //<Text style={{color: props.focused ? 'red' : 'black'}}>{props.title}</Text>
  <View>
    <Image style= {{height:40, width:40, resizeMode:'stretch'}}source={props.focused? require('../img/mypage_active.jpeg') : require('../img/mypage_unactive.png')  } />
  </View>
)
};

const BackgroundView = () => <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, backgroundColor:'white' }}/>

export default class ReceiverRouter extends Component {
  render(){
  return (
    <Router>
      <Scene key="root">
          <Scene key="selection" hideNavBar={true}>
                <Scene key="_selection" component={FirstPage} title="Register"/>
          </Scene>

          <Scene key="ReceiverRouter">

                <Tabs
                gestureEnabled={false} showLabel={false}
                tabs
                activeBackgroundColor="white"
                inactiveBackgroundColor="white"
                hideNavBar={true}
                tabBarStyle={{height:55}}
                >

                  <Scene key="receiver_main" title="main" icon={MainTabIcon} >
                    <Scene key="receiver_board"
                      component={MainPage_R}
                      title="bagspace"
                      initial
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}
                    />
                  </Scene>

                  <Scene key="receiver_registerpage" title='q2'icon={RegisterTabIcon}  backTitle="Back!">
                    <Scene
                      key="receiver_register"
                      component={RegisterPage_R}
                      title="물품 요청하기"
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}

                    />
                  </Scene>

                  <Scene key="receiver_message" title='bagspace'icon={MessageTabIcon} hideNavBar={true}>
                    <Scene
                      key="receiver_messsagebox"
                      title="bagspace"
                      component={MessagePage_R}
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}
                    />
                  </Scene>

                  <Scene key="receiver_mypage" title='q3'icon={MyTabIcon}>
                    <Scene
                      key="receiver_mypagemain"
                      component={MyPage_R}
                      title="마이페이지"
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}
                      style={{backgroundColor:'black'}}
                    />
                  </Scene>
                </Tabs>
          </Scene>

          <Scene key="CarrierRouter">

                {/* Tab Container */}
                <Tabs
                gestureEnabled={false} showLabel={false}
                tabs
                activeBackgroundColor="white"
                inactiveBackgroundColor="white"
                hideNavBar={true}
                tabBarStyle={{height:55}}
                >

          {/* Tab and it's scenes */}
                  <Scene key="carrier_main" title="main" icon={MainTabIcon} >
                    <Scene key="board"
                      component={MainPage_C}
                      title="bagspace"
                      initial
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}
                    />
                  </Scene>

                  <Scene key="carrier_registerpage" title='q2'icon={RegisterTabIcon}  backTitle="Back!">
                    <Scene
                      key="register"
                      component={RegisterPage_C}
                      title="bagspace"
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}

                    />
                  </Scene>

                  <Scene key="carrier_message" title='1q'icon={MessageTabIcon} hideNavBar={true}>
                    <Scene
                      key="messsagebox"
                      title="bagspace"
                      component={MessagePage_C}
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}
                    />
                  </Scene>

                  <Scene key="carrier_mypage" title='q3'icon={MyTabIcon}>
                    <Scene
                      key="mypagemain"
                      component={MyPage_C}
                      title="마이페이지"
                      navigationBarStyle={{backgroundColor: 'white', height:70,}}
                      titleStyle={{color: '#000088', alignSelf: 'center'}}
                      style={{backgroundColor:'black'}}
                    />
                  </Scene>
                  {/* Removed for brevity */}
                </Tabs>
          </Scene>
      </Scene>
    </Router>
  );
}
}

//AppRegistry.registerComponent('bagspace', () => ReceiverRouter);
