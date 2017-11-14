import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ListView from './src/ListView.js';

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ListView bucket = 'air'></ListView>
        <ListView bucket = 'water'></ListView>
        <ListView bucket = 'food'></ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

//AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
export default AwesomeProject;