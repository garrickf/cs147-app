import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {aquaHex, coralHex} from '../../styles';

import Text from './text';

// Basic rectangular button for the normal React Native Button component.

export const BUTTON_COLORS = {
  aqua: 'aqua',
  coral: 'coral',
};

export const BUTTON_TYPES = {
  primary: 'primary',
  secondary: 'secondary',
};

const Button = ({onPress, title, color, type}) => {
  let backgroundColor = '#fff';
  let textColor = '#fff';

  switch (color) {
    case BUTTON_COLORS.aqua:
      backgroundColor = aquaHex;
      break;
    case BUTTON_COLORS.coral:
      backgroundColor = coralHex;
      break;
    default:
      break;
  }

  const borderColor = backgroundColor;

  if (type === BUTTON_TYPES.secondary) {
    textColor = borderColor;
    backgroundColor = '#fff';
  }

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={{
          ...styles.button,
          backgroundColor: backgroundColor,
          borderColor: borderColor,
        }}>
        <Text style={{...styles.buttonText, color: textColor}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: 'bold',
  },
  button: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 2,
    marginLeft: 8,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Button.defaultProps = {
  color: BUTTON_COLORS.aqua,
  type: BUTTON_TYPES.primary,
};

export default Button;
