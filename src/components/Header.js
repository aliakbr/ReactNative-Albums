import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.headerStyle}>
        <Text>Album</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
    shadowColor: '#000',
    // iOS Shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    // Android shadow
    elevation: 2,
  },
});
