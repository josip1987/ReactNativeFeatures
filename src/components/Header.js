import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends Component {
  render() {
  	const { textStyle, viewStyle } = styles;
  	var props = this.props; //?

    return (
      <View style={viewStyle}>
      	 <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
  }
}

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		paddingBottom: 10,
	    borderColor: '#ddd',
	    borderBottomWidth: 1,
		shadowOffset: { width: 0, height: 2 },
		shadowColor: '#000',
		shadowOpacity: 0.2
	},

	textStyle: {
		fontSize: 20
	}
};

export default Header;