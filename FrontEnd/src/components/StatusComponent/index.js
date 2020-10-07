import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
import moment from 'moment';
const StatusComponent = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  title,
  lastMessage,
  createdAt,
  ...attributes
}) => {
  return (
    <Component style={styles.mainView}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.text}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.status}>{'\u2B24'}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
        </View>
        <View>
          <Text style={styles.time}>{moment(createdAt).format('LT')}</Text>
        </View>
      </View>
    </Component>
  );
};

export default StatusComponent;
