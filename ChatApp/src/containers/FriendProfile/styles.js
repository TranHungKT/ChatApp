import { StyleSheet } from 'react-native';

import { Styles } from '@common';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	profileView: {
		flex: 0.4,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: Styles.margin.marginLeft,
	},
	avatar: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},
	name: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	description: {
		fontSize: 16,
	},
	friendListView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textFriend: {
		fontSize: 14,
		fontWeight: 'bold',
		marginRight: 5,
	},
	galleryView: {
		flex: 0.6,
		alignContent: 'center',
		marginHorizontal: Styles.margin.marginLeft,
	},
});
