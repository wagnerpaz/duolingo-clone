import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const LanguageItem = ({item, selected}) => {
    return (
        <View style={styles.container}>
            <View style={{...styles.selected, ...(!selected ? {borderWidth: 0} : null)}}>
                <Image style={styles.image} source={item.image}/>
            </View>
            <Text>{item.text}</Text>
        </View>
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