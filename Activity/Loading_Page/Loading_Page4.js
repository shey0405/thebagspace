import React, { Component, } from 'react'
import { View, Image} from 'react-native'

class LoadingPage4 extends Component {

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
           source={require('../../img/loading_bg4.png')}
        />
      </View>
    )
  }
}

export default LoadingPage4