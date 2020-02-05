import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {MaterialCommunityIcons, Entypo, FontAwesome, MaterialIcons} from '@expo/vector-icons';

const LessonIcon = ({iconFont, iconName, iconSize, title, level}) => {
    return (
        <View style={styles.container}>
            <View style={styles.border}>
                <View style={styles.center}>
                    {getIcon(iconFont, iconName, iconSize)}
                </View>
            </View>
            <Text style={styles.text}>{title}</Text>
            <View style={styles.crown}>
                <Image source={require('../../res/duo-crown.png')} style={styles.crownIcon}/>
                <Text style={styles.crownText}>{level}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    border: {
        borderWidth: 8,
        borderRadius: 180,
        borderColor: '#E5E5E5',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        borderRadius: 180,
        backgroundColor: 'red',
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: 50,
        color: 'white',
    },
    crown: {
        position: 'absolute',
        bottom: 60,
        right: 0,
    },
    crownIcon: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 30, 
        height: 28,
    },
    crownText: {
        position: 'absolute',
        top: 6,
        right: 11,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 18,
    }
});

const getIcon = (font, name, size) => {
    const style = size ? {...styles.icon, fontSize: size} : styles.icon;
    switch(font) {
        case 'MaterialCommunityIcons':
            return <MaterialCommunityIcons style={style} name={name}/>;
        case 'Entypo':
            return <Entypo style={style} name={name}/>;
        case 'FontAwesome':
            return <FontAwesome style={style} name={name}/>;
        case 'MaterialIcons':
            return <MaterialIcons style={style} name={name}/>;
        default:
            return null;
    }
};

export default LessonIcon;