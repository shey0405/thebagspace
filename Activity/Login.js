import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.bigblue}>
        <Text style={styles.textT}>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={styles.textT}>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.textT}>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Login.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  bigblue: {
    alignItems: 'center',
  },
  textT: {
    marginTop: 100
  },
});
