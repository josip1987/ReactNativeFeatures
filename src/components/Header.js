import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
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
	    borderColor: '#ddd',
	    borderBottomWidth: 1,
		shadowOffset: { width: 0, height: 20 },
		shadowColor: '#000',
		shadowOpacity: 0.2
	},

	textStyle: {
		fontSize: 20
	}
};

export default Header;