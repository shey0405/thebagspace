import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet,Image
 } from 'react-native';
import ImageSlider from 'react-native-image-slider';

export default class Choose extends Component
{
  constructor() {
    super();

  }


  render() {



    return (



      <View style={styles.body}>

      <View style={styles.topBox}>
        <View style={styles.topBox_blank}/>

        <View style={styles.topBox_mid}>

            <Image
            source={require('../img/bagspace_logo.png')}
            style={styles.topBox_image}
            >
            <Image
              source={require('../img/btn_back.png')}
              style={styles.topBox_btn_back}
              >
              </Image>

            </Image>
        </View>
        <View style={styles.topBox_blank}/>
      </View>
        

      <View style={styles.imageBox}>
      <ImageSlider
      images={[
        'http://52.78.218.213:3000/img',
        'http://52.78.218.213:3000/img',
        'http://52.78.218.213:3000/img'
      ]}
      style={styles.imageBox_img}
    />
      </View>

      <View style={styles.contentBox}>

      </View>

      <View style={styles.textBox}>
        <Text
          style={styles.text_style}
        >
          중고물품은 직접 구매해서 가져다 드리기 서비스를 이용할 수 없습니다.{"\n"}중고 업체에서 직접 여행자님 댁으로 배송해드립니다^^
        </Text>
      </View>

      <View style={styles.btnBox}>
        <View style={styles.btnBox_blank}/>
        <View style={styles.btnBox_cover}>

        <Image
          source={require('../img/btn_sendMessage.png')}
          style={styles.btnBox_sendMessage}
          >
          </Image>
          <Image
            source={require('../img/btn_deliver.png')}
            style={styles.btnBox_deliver}
            >
            </Image>
        </View>
        <View style={styles.btnBox_blank}/>
      </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  body:{
    flex: 1
  },
  topBox: {
    flex: 144,
    flexDirection: 'column',
    alignItems: 'center'
  },
    topBox_blank: {
      flex: 1.3,
    },
    topBox_mid: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },

      topBox_image: {
        flex: 1,
        resizeMode: 'contain',
        height: 18,
        flexDirection: 'row',
        alignItems: 'center'
      },
        topBox_btn_back: {
          resizeMode: 'contain',
          height: 12,
          marginLeft: 23,
        },
  imageBox: {
    flex: 503,
  },
    imageBox_img: {
    },
  contentBox: {
    flex: 683,
    backgroundColor: "#FF0000",
  },
  textBox: {
    flex: 104,
    backgroundColor: "#E6E6E6",
  },
    text_style: {
      fontSize: 11.2,
      padding: 8,
      lineHeight: 15.3,
      color: "#999999"
    },
  btnBox:{
    flex: 160,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  },
    btnBox_blank:{
      flex: 1,
    },
    btnBox_cover:{
      flex: 15,
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
      btnBox_margin1: {
        flex: 31,
      },
      btnBox_margin2: {
        flex: 20,
      },
      btnBox_margin3: {
        flex: 31,
      },
      btnBox_sendMessage: {
        flex: 334,
        resizeMode: 'contain',
        marginRight: 17,
      },
      btnBox_deliver: {
        flex: 416,
        resizeMode: 'contain',
      }

});
