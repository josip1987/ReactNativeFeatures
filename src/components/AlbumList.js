import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  
  componentWillMount() {
  		//returns a promise
  	axios.get('https://gist.githubusercontent.com/josip1987/7ca56c06bda07f0d76a71cfd7e149b5a/raw/473db313f8a535b58c0a7c54abc3686c157794d9/gistfile1.txt')
  		 .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
  	return this.state.albums.map(album => 
      // better to use ID than title if possible, or uuid module
      <AlbumDetail key={album.title} albumProp={album} /> // pass album as a prop to child, child receives a "props" object
    );
  }

  render() {
    return (
        <View>
        		{this.renderAlbums()}
        </View>
    );
  }
}

export default AlbumList;