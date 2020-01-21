import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const TabBarIcon = ({icon, focused, color}) => {
    return (
        <Feather
            style={{
                ...styles.tabBarIcon,
                ...(color ? {color: color} : null),
                ...(!focused ? styles.blurred : null)
            }}
            name={icon}
        />
    );
};

const styles = StyleSheet.create({
    tabBarIcon: {
        padding: 20,
        fontSize: 40,
        flex: 1,
        color: 'black',
    },
    blurred: {
        color: '#DEDEDE',
    }
});

export default TabBarIcon;

export const includeTabBarIcon = (icon, color) => {
    return {
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            return <TabBarIcon icon={icon} focused={focused} color={color}/>
        }
    };
};