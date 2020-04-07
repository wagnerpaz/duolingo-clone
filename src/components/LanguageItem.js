import React from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';

const LanguageItem = ({item, onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.selected, !item.current ? {borderColor: 'white'} : null]}>
                <Image style={styles.image} source={item.image}/>
            </View>
            <Text>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 15,
        padding: 5,
    },
    image: {
        height: 60,
        width: 100,
        borderRadius: 15,
    },
});

export default LanguageItem;