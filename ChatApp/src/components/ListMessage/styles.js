import { StyleSheet } from 'react-native';
import { Color, Config, Styles } from '@common';

export default StyleSheet.create({
	container: {
		paddingBottom: 10,
		paddingTop: 10,
		flex: 1,
	},
	messageBox: {
		borderRadius: 35,
		padding: 15,
		width: (Styles.width * 2) / 3,
	},
	myMessage: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	name: {
		color: 'black',
		fontWeight: 'bold',
		marginBottom: 5,
	},
	time: {
		alignSelf: 'flex-end',
		color: 'grey',
		fontSize: 10,
	},
	message: {
		flex: 0.9,
		flexDirection: 'column',
		fontSize: Styles.message.textMessageFontSize,
		fontFamily: Styles.message.textMessageFontFamily,
		color: Color.message.textColor,
	},
	notMyMess: {
		backgroundColor: Color.message.notMyMessBackground,
		marginLeft: Styles.message.notMyMessMargin.marginLeft,
		marginRight: Styles.message.notMyMessMargin.marginRight,
		flexDirection: 'row',
	},
	myMess: {
		backgroundColor: Color.message.myMessBackground,
		marginLeft: Styles.message.myMessMargin.marginLeft,
		marginRight: Styles.message.myMessMargin.marginRight,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 10,
		marginLeft: 100,
	},
	notMyImage: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	imageView: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
