import React, { Component } from 'react';
import { Text, Image, styleSheet, View, TextInput,Button, TouchableHighlight } from 'react-native';
import { receiverUpdate } from '../../actions';
import { connect } from 'react-redux';

const rgpageFontSize = 13;

class RegisterPageRC extends Component {


render(){
  return(
    <View style={{flex:1,flexDirection:'column',backgroundColor:'white'}}>

      {/*수령정보 column*/}
      <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
        <View style={{padding:8 }}>
          <Text style={{color:'#000088'}}>수령정보</Text>
        </View>


        {/*수령 기한 Input*/}
        <View style={{flexDirection:'row', padding:8}}>
          <View style={{ flex:2}} >
            <Text style={{color:'gray'}}>수령 기한 :</Text>
          </View>
          <View style={{ flex:2}} >
            <TextInput
            style = {{borderBottomWidth: 1,fontSize: rgpageFontSize, padding:0.5 ,borderColor: 'gray',textAlign:'center'}}
            autoCorrect= {false}
            placeholder="2017"
            maxLength = {4}
            value = {this.props.rcyear}
            onChangeText={value => this.props.receiverUpdate({ prop: 'rcyear', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray'}}>
            <Text style={{color: 'gray'}}>년</Text>
          </View>
          <View style={{ flex:1}}>
            <TextInput
            style = {{borderBottomWidth: 1,fontSize: rgpageFontSize, padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="**"
            maxLength = {2}
            value = {this.props.rcmonth}
            onChangeText={value => this.props.receiverUpdate({ prop: 'rcmonth', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray' }}>
            <Text style={{color: 'gray'}}>월</Text>
          </View>
          <View style={{ flex:1}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="**"
            maxLength = {2}
            value = {this.props.rcday}
            onChangeText={value => this.props.receiverUpdate({ prop: 'rcday', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray' }}>
            <Text style={{color: 'gray'}}>일</Text>
          </View>
        </View>


        {/*수령 희망 장소 TextInput*/}
        <View style={{flexDirection:'row', padding:8}}>
          <View style={{ flex:2}} >
            <Text style={{color:'gray'}}>수령 희망 장소 :</Text>
          </View>
          <View style={{ flex:5}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="예)프라하 바플라츠광장 BATA 신발가게 앞"
            maxLength = {20}
            value = {this.props.rcspot}
            onChangeText={value => this.props.receiverUpdate({ prop: 'rcspot', value })}
            />
          </View>
        </View>

        {/* 수령 희망 시간 TextInput*/}
        <View style={{flexDirection:'row', padding:8,}}>
          <View style={{ flex:3}} >
            <Text style={{color:'gray'}}>수령 희망 시간 :</Text>
          </View>
          <View style={{ flex:1}} >
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="**"
            maxLength = {2}
            value = {this.props.fhour}
            onChangeText={value => this.props.receiverUpdate({ prop: 'fhour', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray'}}>
            <Text style={{color: 'gray'}}>시</Text>
          </View>
          <View style={{ flex:1}}>
            <TextInput
            style = {{borderBottomWidth: 1 ,fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="**"
            maxLength = {2}
            value = {this.props.fminute}
            onChangeText={value => this.props.receiverUpdate({ prop: 'fminute', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray' }}>
            <Text style={{color: 'gray'}}>분</Text>
          </View>
          <View style={{ padding:0.5,borderColor: 'gray'}}>
            <Text style={{color: 'gray'}}>  ~  </Text>
          </View>
          <View style={{ flex:1}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="**"
            maxLength = {2}
            value = {this.props.thour}
            onChangeText={value => this.props.receiverUpdate({ prop: 'thour', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray' }}>
            <Text style={{color: 'gray'}}>시</Text>
          </View>
          <View style={{ flex:1}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="**"
            maxLength = {2}
            value = {this.props.tminute}
            onChangeText={value => this.props.receiverUpdate({ prop: 'tminute', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray' }}>
            <Text style={{color: 'gray'}}>분</Text>
          </View>
        </View>
      </View>


      {/*물품정보 column*/}
      <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
        <View style={{padding:8 }}>
          <Text style={{color:'#000088'}}>물품정보</Text>
        </View>


        {/*물품명 Input*/}
        <View style={{flexDirection:'row', padding:8}}>
          <View style={{ flex:2}} >
            <Text style={{color:'gray'}}>물품명 :</Text>
          </View>
          <View style={{ flex:7}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            placeholder="예)도서 3권"
            maxLength = {20}
            value = {this.props.items}
            onChangeText={value => this.props.receiverUpdate({ prop: 'items', value })}
            />
          </View>
        </View>


        {/*원하시는 물건의 링크 TextInput*/}
        <View style={{flexDirection:'row', padding:8}}>
          <View style={{ flex:2}} >
            <Text style={{color:'gray'}}>원하시는 물건의 링크 :</Text>
          </View>
          <View style={{ flex:3.5}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            autoCapitalize = 'none'
            maxLength = {70}
            value = {this.props.itemlink}
            onChangeText={value => this.props.receiverUpdate({ prop: 'itemlink', value })}
            />
          </View>
        </View>

        {/* 옵션(색상,수량,사이즈 등) TextInput*/}
        <View style={{flexDirection:'row', padding:8}}>
          <View style={{ flex:2}} >
            <Text style={{color:'gray'}}>옵션(색상,수량 등) :</Text>
          </View>
          <View style={{ flex:4}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            autoCapitalize = 'none'
            placeholder="예)만화 삼국지2권, 프라하이야기 1권"
            maxLength = {20}
            value = {this.props.options}
            onChangeText={value => this.props.receiverUpdate({ prop: 'options', value })}
            />
          </View>
        </View>

        {/* 가격 TextInput*/}
        <View style={{flexDirection:'row', padding:8}}>
          <View style={{ flex:2}} >
            <Text style={{color:'gray'}}>물건가격 :</Text>
          </View>
          <View style={{ flex:4}}>
            <TextInput
            style = {{borderBottomWidth: 1 , fontSize: rgpageFontSize ,padding:0.5 ,textAlign:'center',borderColor: 'gray'}}
            autoCorrect= {false}
            autoCapitalize = 'none'
            maxLength = {20}
            value = {this.props.price}
            onChangeText={value => this.props.receiverUpdate({ prop: 'price', value })}
            />
          </View>
          <View style={{ padding:0.5,borderColor: 'gray' }}>
            <Text style={{color: 'gray'}}>원</Text>
          </View>
        </View>
        <View style={{ marginLeft:8,marginRight:8,padding:0.5,borderColor: 'gray' }}>
          <Text style={{color: 'gray', fontSize:10}}>( 실시간 특가할인쿠폰,
            사이트 게임등급을 통해 할인 받을 수 있는 금액이 아니라 누구나 구매할 수 있는 사이트의 금액을 적어주세요.)</Text>
        </View>
      </View>

      {/*스크린샷 업로드*/}
      <View style={{flex:0.5, flexDirection:'column', justifyContent:'center',}}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View style={{borderBottomWidth:1, margin:10,borderColor: 'gray'}}>
            <Text style={{color: 'gray'}}> 옵션까지 고른 화면 스크린샷으로 올리기             </Text>
          </View>
          <View style={{width:60,height:30,borderRadius:30, borderWidth:1,justifyContent:'center', alignItems:'center',borderColor:'#000088'}}>
            <TouchableHighlight>
              <Text style={{color:'#000088'}}>업로드</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      {/*다음페이지(결제페이지)로 넘기기*/}
      <View style={{flex:0.3, flexDirection:'column', justifyContent:'center', marginBottom:30}}>
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <View style={{width:120,height:40,borderRadius:40, borderWidth:1,justifyContent:'center', alignItems:'center',borderColor:'#000088'}}>
            <TouchableHighlight>
              <Text style={{color:'#000088', fontSize:20}}>다 음</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>




    </View>

    )
  }
}
const mapStateToProps = (state) => {
  const { rcyear, rcmonth, rcday, rcspot, fhour, fminute, thour,
     tminute, items, itemlink, options, price } = state.receiverForm;

  return  { rcyear, rcmonth, rcday, rcspot, fhour, fminute,
    thour, tminute, items, itemlink, options, price };
};

export default connect(mapStateToProps, { receiverUpdate })(RegisterPageRC);
