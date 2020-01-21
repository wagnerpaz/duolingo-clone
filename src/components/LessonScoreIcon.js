import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Feather, Foundation, MaterialCommunityIcons} from '@expo/vector-icons';

const LessonScoreIcon = ({icon = 'help-circle', color = 'black', count = 0, spacing = 0, iconSizing = 0}) => {
    return (
        <View style={styles.container}>
            {renderIcon(icon, color, iconSizing)}
            <Text style={textStyle(color, spacing)}>{count}</Text>
        </View>
    );
};

const renderIcon = (icon, color, sizing) => {
    switch(icon) {
        case 'crown': return <Foundation style={iconStyle(color, sizing)} name="crown"/>
        case 'fire': return <MaterialCommunityIcons style={iconStyle(color, sizing)} name="fire"/>
        case 'jewel': return <MaterialCommunityIcons style={iconStyle(color, sizing)} name="diamond"/>
        default: return <Feather style={iconStyle(color, sizing)} name={icon}/>
    }
};

const iconStyle = (color, sizing) => {
    return {...styles.icon, color: color, fontSize: styles.icon.fontSize + sizing};
}

const textStyle = (color, spacing) => {
    return {...styles.counter, color: color, marginLeft: styles.counter.marginLeft + spacing};
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        fontSize: 28,
    },
    counter: {
        marginLeft: 5,
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default LessonScoreIcon;