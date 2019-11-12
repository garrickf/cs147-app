import React, {useState} from 'react';
import {TouchableOpacity, View, Image, StyleSheet, Text} from 'react-native';
import {useSpring, animated} from 'react-spring';
import {aquaHex, coralHex} from '../styles';
import CircleButton from './core/circle-button';

export default () => {
    const [toggled, setToggle] = useState(false);

    return (
        <TouchableOpacity onPress={()=>setToggle(!toggled)} activeOpacity={0.5}>
            <View style = {{...styles.beacon, height: toggled ? 100 : 50, width: toggled ? 100 : 50}}>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    beacon: {
        backgroundColor: aquaHex,
    },
});