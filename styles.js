import {StyleSheet} from 'react-native';

// Typography constants
const headerFontSize = 20;
const bodyFontSize = 16;
const bodyLineHeight = 1.3;

// Typography
export const typography = StyleSheet.create({
  header: {
    fontFamily: 'DMSans-Bold',
    fontSize: headerFontSize,
  },
  body: {
    fontSize: bodyFontSize,
    lineHeight: bodyFontSize * bodyLineHeight,
  },
});

// Color constants
export const coralHex = '#FF2C52';
export const aquaHex = '#3EE5E5';
export const orchidHex = '#3E2C52';
