import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
		alignContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'red',
	},
	image: {
		height: 100,
		width: 100,
		borderRadius: 50,
	},
	userName: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	balance: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'red',
	},
});
