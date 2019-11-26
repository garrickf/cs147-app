import React, {useState} from 'react';
import {StyleSheet, Text, ImageBackground, View} from 'react-native';
import {aquaHex, coralHex, blackHex} from '../styles';

const viewImageScreen = ({navigation}) => {
    pathe = navigation.getParam('path', 'null');
    return (
        <>
          <View style={{flex: 1}}>
            <ImageBackground 
            source={pathe}
            style={styles.container} >
            </ImageBackground>
          </View>
        </>
      );
    };
  
  export default viewImageScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    view: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    circleButton: {
      width: 80,
      height: 80,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
    },
  });
  