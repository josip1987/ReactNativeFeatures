import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => { // receive props object from parent
    return (
      <Card>
          <Text>{props.albumProp.title}</Text>
      </Card>
    );
};

export default AlbumDetail;