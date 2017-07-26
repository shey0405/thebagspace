import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  MapView,
  ProgressViewIOS,
} from 'react-native'

export default class Test extends Component
{
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2']),
    };
  }

  render() {
    return (
      <View style={styles.body}>
      <View style={styles.bodyfake}>
        <Text> hello </Text>
      </View>
      <ListView
        dataSource={this.state.dataSource}
        style={[styles.list, {width:50}]}
        renderRow={
          (rowData) => <Text
                        style={styles.textT}
                        >
                        {rowData}
                      </Text>
        }
      />
      <View style={styles.bodyfake}>
        <Text> hello </Text>
      </View>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyfake: {
    flex: 3,
    backgroundColor: "#FF0000"
  },
  list: {
    flex: 100,
    backgroundColor: '#00FF00',
  },
  textT: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#000000',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
