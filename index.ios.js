 import React, { Component } from 'react';
 import {
   StyleSheet,
   View, Text,
   AppRegistry,
   Dimensions, Image, TouchableHighlight, Alert
 } from 'react-native';
 import Hello from './hello';

 import MyScene1 from './Activity/New_Loading2';
 import MyScene2 from './Activity/New_Loading';
 import Loading3 from './Activity/Loading2';

 class Main extends Component {

   constructor(props){
     super(props);
     this.state = {
       select_value : 'empty',
     };
   }
   _onPress1(){
     this.setState(
       {select_value : 'receiver',}
     )
   }
   _onPress2(){
     this.setState(
       {select_value : 'carrier',}
     )

   }

       render(){

         if(this.state.select_value=='empty'){
           return(
         <View style = {styles.container}>
           <Title/>
           <Figure/>
           <View style = {styles.selection}>
             <View style = {styles.left_selection}>
               <View style = {styles.left_figure}>
                <TouchableHighlight onPress={this._onPress1.bind(this)}
                style = {styles.left_figure}>
                 <Image
                 source = {require('./img/bag.jpg')}
                 style = {styles.bottom_image}/>
                </TouchableHighlight>
               </View>
               <View style = {styles.left_text}>
                   <Image
                   source = {require('./img/select_1.jpeg')}
                   style = {styles.bottomTextLeft_image}/>
               </View>
             </View>
             <View style = {styles.right_selection}>
               <View style = {styles.right_figure}>
                 <TouchableHighlight onPress={this._onPress2.bind(this)}
                 style = {styles.right_figure}>
                  <Image
                  source = {require('./img/spot.jpg')}
                  style = {styles.bottom_image}/>
                </TouchableHighlight>
               </View>
               <View style = {styles.right_text}>
                   <Image
                   source = {require('./img/select_2.jpeg')}
                   style = {styles.bottomTextRight_image}/>
               </View>
             </View>
           </View>
         </View>)
         }
           else if(this.state.select_value=='receiver'){
             return (
               <MyScene1 />
           )
         }

          else if(this.state.select_value=='carrier'){
             return (
               <MyScene2 />
             )
           }

       }


 }

class Title extends Component {

  render(){
    return(
      <View style = {styles.title}>
        <Image
        source = {require('./img/bagspace_logo.png')}
        style = {styles.title_image}>
        </Image>
      </View>
    )
  }
}

class Figure extends Component {

  render(){
    return(
      <View style = {styles.figure}>
        <Image
        source = {require('./img/MainSelection.jpeg')}
        style = {styles.main_image}>
        </Image>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  figure: {
    flex: 1.8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

  },
  selection: {
    flex: 1,
    flexDirection: 'row',
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
  main_image: {
    flex:1,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    //resizeMode: 'contain',
  },
  bottom_image: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  bottomTextRight_image: {
    width: 120,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  bottomTextLeft_image: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  left_selection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_selection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_figure: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    borderWidth:1,
    borderColor: '#d6d7da'
  //  backgroundColor: 'rgba(74,144,226,1)',
  },
  right_figure: {
    height: 150,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 150,
    borderWidth:1,
    borderColor: '#d6d7da'
  },

})

//AppRegistry.registerComponent('bagspace', () => Main);
