import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {Language} from '@common';
const StatusComponent = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  title,
  lastMessage,
  createdAt,
  type,
  ...attributes
}) => {
  return (
    <Component style={styles.mainView}>
      <Text style={styles.textTitle}>{title}</Text>
      <View style={styles.text}>
        <View style={styles.messageView}>
          <Text style={styles.status}>{'\u2B24'}</Text>
          <Text style={styles.lastMessage} numberOfLines={1}>
            {type == Language.type.rooms ? lastMessage : 'Online'}
          </Text>
        </View>
        <View>
          <Text style={styles.time}>
            {type == Language.type.rooms
              ? moment(createdAt).format('LT')
              : null}
          </Text>
        </View>
      </View>
    </Component>
  );
};

export default StatusComponent;
