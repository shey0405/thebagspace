import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native'
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

import MyScene from './Main2';
import Loading2 from './Loading2';

export default class ViewPagerPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};
  }

   changeView(){
     this.setState({
       viewOne: !this.state.viewOne
     })
  }

  getInitialState(){
    return {
      viewOne: true
    }
  }

    render() {
          if(!this.state.viewOne)
        return (
            <View style={{flex:1}}>
                <IndicatorViewPager
                    style={
                      {
                        flex: 1,
                      }
                    }
                    indicator={this._renderDotIndicator()}
                >

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    //  backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_rc1.jpg')}
                    />
                  </View>
                     <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_rc2.jpg')}
                    />
                  </View>
                    <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_rc3.jpg')}
                    />
                  </View>
                    <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_rc4.jpg')}
                    />
                  </View>

                    <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(74,144,226,1)",
                    }}>
                    <Image
                      style={{
                          flex: 1,
                      }}
                      resizeMode={"contain"}
           source={require('../img/loading_rc5.jpg')}
                    />
                  </View>

                    <View
                    style={{
                      flex: 1,
                      justifyContent:  "center" ,
                      alignItems:  "center" ,
                      backgroundColor:  "rgba(74,144,226,1)" ,
                    }}>
                  <TouchableHighlight
                    onPress={() => this.changeView()
                        }
                    activeOpacity={100 / 100}
                    underlayColor={"rgb(210,210,210)"}>
                    <Image
                      style={{
                          flex: 1,
                      }}
                      resizeMode={ "contain" }
           source={require('../img/loading_rc6.jpg')}
                    />
                  </TouchableHighlight>

                  </View>
                </IndicatorViewPager>


            </View>
        );
      return(
        <Loading2/>
      );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['', '', '', '', '','']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={0} />;
    }

    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
            },{
                text: 'Message',
            },{
                text: 'Profile',
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}
