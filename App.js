import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() { // flex on View goes because of the ScrollView
             // expand component to fit entire content
    return (
        <View style={{ flex: 1 }}> 
           <Header headerText={'Albums'} />
           <AlbumList />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
