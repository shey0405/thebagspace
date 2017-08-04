
import React, {Component} from 'react';
import { AppRegistry, View, Text, FlatList, Image, StyleSheet, } from 'react-native';
import ReactNative from 'react-native';

export default class messageCollection extends Component {

  renderMessage(message){
    return (
    <View style={styles.container}>
      <Image
        source={{uri: message.picture}}
        style={styles.picture}
        />
        <View style={styles.rightContainer} >
          <Text> {message.name}  </Text>
          <Text> {message.talking} </Text>
          <Text> {message.number} </Text>
        </View>
      </View>
    );
  }


  render(){
    //var message = MESSAGE_DATA[0];
    return(
      <View style={styles.container}>
      <Text> 1</Text>
    <FlatList
      data={[
        {key: 'Devin' , avartar:'https://github.com/joonhyukchoi/bagspace_beta/blob/master/bagspace_application/bagspace.jpg'},
      ]}
      renderItem={({item})=>  <View style={styles.container}>
            <Image
              source={{uri: item.avartar}}
              style={styles.picture}
              />
              <View style={styles.rightContainer} >
                <Text> {item.key}  1</Text>
              </View>
            </View>}
        />
        </View>



  );

  }
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


//AppRegistry.registerComponent('bsapp', () => messageCollection);
