import { Color, Styles } from '@common';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	balance: {
		marginHorizontal: 20,
		marginTop: 20,
		flex: 0.1,
	},
	balanceText: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	receiverInforView: {
		flex: 0.3,
		marginHorizontal: 20,
		marginTop: 20,
	},
	title: {
		fontSize: 14,
		marginTop: 10,
	},
	sentButton: {
		position: 'absolute',
		bottom: 50,
		alignSelf: 'center',
		width: (Styles.width * 3) / 4,
		height: 50,
		borderRadius: 25,
		backgroundColor: Color.activeBackgroundColor,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
