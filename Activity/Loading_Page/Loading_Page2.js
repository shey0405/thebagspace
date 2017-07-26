import React, { Component, } from 'react'
import { View, Image} from 'react-native'

class LoadingPage2 extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
         <Image 
          style={{
            flex: 1,
          }}
          resizeMode={"contain"}
           source={require('../../img/loading_bg2.png')}
        />
      </View>
    )
  }
}

export default LoadingPage2