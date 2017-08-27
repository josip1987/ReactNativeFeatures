import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress }) => { //receive onPress in props obj. from parent
	const { buttonStyle, buttonTextStyle } = styles;
	return (
		<TouchableOpacity 
			onPress={onPress} 
			style={buttonStyle}>

			<Text style={buttonTextStyle}>
				Click me!
			</Text>
		</TouchableOpacity>
	);
};

const styles = {
	buttonStyle: {
		flex: 1, //expand content as much as it can
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5
	},
	buttonTextStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	}
};

export default Button;