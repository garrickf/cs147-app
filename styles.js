import {StyleSheet} from 'react-native';

// Typography constants
const headerFontSize = 32;
const bodyLineHeight = 1.3;
const bodyFontSize = 18;

// Typography
export const typography = StyleSheet.create({
  header: {
    fontFamily: 'DMSans-Bold',
    fontSize: headerFontSize,
  },
  body: {
    fontSize: 18,
    lineHeight: bodyFontSize * bodyLineHeight,
  },
});

// Color constants
export const coralHex = '#FF2C52';
export const aquaHex = '#3EE5E5';
const orchidHex = '#3E2C52';
