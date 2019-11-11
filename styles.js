import {StyleSheet} from 'react-native';

// Typography constants
const headerFontSize = 22;
const bodyFontSize = 17;
const bodyLineHeight = 1.23;

// Typography
export const typography = StyleSheet.create({
  header: {
    fontFamily: 'DMSans-Bold',
    fontSize: headerFontSize,
  },
  body: {
    fontFamily: 'DMSans-Regular',
    fontSize: bodyFontSize,
    lineHeight: bodyFontSize * bodyLineHeight,
  },
});

// Color constants
export const coralHex = '#FF2C52';
export const aquaHex = '#3EE5E5';
export const orchidHex = '#3E2C52';
export const whiteHex = '#FFF';
export const grayHex = '#CCC';
export const blackHex = '#000';

export const effects = StyleSheet.create({
  dropShadow: {
    backgroundColor: whiteHex,
    borderColor: grayHex,
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
