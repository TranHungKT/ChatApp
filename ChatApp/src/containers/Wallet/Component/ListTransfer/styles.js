import { Color } from '@common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 10,
	},
	titleView: {
		flex: 0.2,
		backgroundColor: '#BFBFBF',
		justifyContent: 'center',
	},
	title: {
		fontSize: 16,
		color: 'red',
		marginLeft: 20,
	},
	item: {
		height: 100,
		borderBottomWidth: 0.5,
		borderBottomColor: 'black',
		marginHorizontal: 20,
	},
	transferView: {
		flexDirection: 'row',
		marginTop: 10,
		// marginLeft: 20,
		justifyContent: 'space-between',
	},
	image: {
		width: 25,
		height: 25,
		borderRadius: 12.5,
		padding: 10,
		marginRight: 10,
	},
	nameText: {
		fontSize: 16,
	},
	description: {
		marginTop: 10,
		fontSize: 16,
	},
	plus: {
		fontWeight: 'bold',
		color: '#33DDFF',
	},
	minus: {
		fontWeight: 'bold',
		color: '#032931',
	},
});
