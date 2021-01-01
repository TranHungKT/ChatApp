import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';
import { Color } from '@common';

const FActivityIndicator = () => {
	return (
		<View style={styles.activityIndicatorWrapper}>
			<ActivityIndicator color={Color.activeTintColor} size={'small'} />
		</View>
	);
};

export default memo(FActivityIndicator);
