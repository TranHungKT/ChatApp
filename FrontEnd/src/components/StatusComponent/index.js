import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';

const StatusComponent = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  //   source,
  ...attributes
}) => {
  return (
    <Component style={styles.mainView}>
      <Text style={styles.textTitle}>Chris</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.status}>{'\u2B24'}</Text>
        <Text style={styles.lastMessage}>Keep moving up</Text>
      </View>
    </Component>
  );
};

export default StatusComponent;
