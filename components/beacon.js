import React, {useState} from 'react';
import {
  TouchableOpacity,
  TouchableHighlight,
  View,
  Modal,
  StyleSheet,
  Text,
  Alert,
} from 'react-native';
import {useSpring, animated} from 'react-spring';
import {aquaHex, coralHex} from '../styles';

export default ({type, location}) => {
  const [toggled, setToggle] = useState(false);

  return (
    <TouchableOpacity onPress={() => setToggle(!toggled)} activeOpacity={0.5}>
      <View
        style={{
          ...styles.circle,
          borderWidth: toggled ? 60 : 30,
          borderRadius: toggled ? 100 : 50,
          height: toggled ? 200 : 100,
          width: toggled ? 200 : 100,
        }}
      />

      <View
        style={{
          ...styles.bottom,
          borderLeftWidth: toggled ? 80 : 40,
          borderRightWidth: toggled ? 80 : 40,
          marginLeft: toggled ? 20 : 10,
          marginTop: toggled ? 160 : 80,
          borderTopWidth: toggled ? 160 : 80,
        }}
      />

      <Modal animationType="slide" transparent={true} visible={toggled}>
        <View style={{...styles.modal, marginTop: 22}}>
          <View
            style={{
              height: 200,
              width: 200,
              backgroundColor: '#fff',
              padding: 20,
            }}>
            <Text>Hello World!</Text>

            <TouchableHighlight
              onPress={() => {
                setToggle(!toggled);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderColor: aquaHex,
  },

  bottom: {
    width: 0,
    height: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: aquaHex,
    position: 'absolute',
  },

  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
