import React from 'react';
import { Text, View } from 'react-native';

const AlbumDetail = (props) => { // receive props object from parent
    return (
      <View>
          <Text>{props.albumProp.title}</Text>
      </View>
    );
};

export default AlbumDetail;