import { StyleSheet } from 'react-native';

import { Color, Styles } from '@common';

export default StyleSheet.create({
	container: {
		height: Styles.headerHeight,
		backgroundColor: Color.headerBackgroundColor,
		flexDirection: 'row',
		...Styles.Common.ColumnCenter,
	},
	backButton: {
		flex: 0.15,
		marginLeft: Styles.margin.marginLeft,
		...Styles.Common.ColumnCenterLeft,
	},
	title: {
		flex: 0.7,
		...Styles.Common.ColumnCenter,
	},
	titleText: {
		fontSize: Styles.FontSize.big,
		fontFamily: Styles.FontFamily.LatoBold,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Color.headerTitleColor,
	},
	svgBigView: {
		flex: 0.15,
		flexDirection: 'row',
		marginRight: Styles.margin.marginRight,
		...Styles.Common.RowCenterRight,
	},
	svgView: {
		flex: 0.75,
	},
});
