import React from 'react';
import { StyleSheet, Text } from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {
  render() {
    return (
        <Header headerText={'Albums'} />
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
