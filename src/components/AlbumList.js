import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
  state = { albums: [] };
  
  componentWillMount() {
  		//returns a promise
  	axios.get('https://gist.githubusercontent.com/josip1987/7ca56c06bda07f0d76a71cfd7e149b5a/raw/473db313f8a535b58c0a7c54abc3686c157794d9/gistfile1.txt')
  		 .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
  	return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    return (
        <View>
        	<Text>
        		{this.renderAlbums()}
        	</Text>
        </View>
    );
  }
}

export default AlbumList;