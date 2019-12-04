import React from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Linking} from 'react-native';
import Text from './core/text';
import {effects, grayHex} from '../styles';

export default ({source}) => {
  link = 'http://news.bbc.co.uk/aboutbbcnews/hi/this_is_bbc_news/default.stm';
  image = require('../assets/images/bbc_logo.png');
  if (source == 'SF') {
    image = require('../assets/images/chronicle_logo.png');
    link = 'https://en.wikipedia.org/wiki/San_Francisco_Chronicle';
  }
  return (
    <View style={styles.container}>
      <View style={styles.IconBackground}>
        <Image style={styles.icon} resizeMode="cover" source={image} />
      </View>
      <TouchableOpacity
        style = {styles.toast}
        onPress = { () => { Linking.openURL(link
        ).catch(err => console.error('An error occurred', err));
        }
    }
        activeOpacity={0.5}>
        <Text style={{color: '#FFFF'}}> More about this source... </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    borderRadius: 10,
    ...effects.dropShadow,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 20,
    marginLeft: 10,
    height: 35,
    backgroundColor: grayHex,
    alignSelf: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  IconBackground: {
    position: 'relative',
    width: 80,
    height: 80,
    marginLeft: 11,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    ...effects.dropShadow,
  },
  icon: {
    width: 60,
    height: 60,
  },
});
