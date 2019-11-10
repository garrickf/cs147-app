import React from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import {aquaHex} from '../styles';

export default () => (
  // TODO: add onPress? Different button styles?
  <TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
    <View style={styles.circleButton}>
      <Image
        style={styles.icon}
        source={require('../assets/images/plus.png')}
      />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: aquaHex,
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    width: 60,
    height: 60,
  },
});
