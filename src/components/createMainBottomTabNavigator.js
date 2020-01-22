import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

export default (RouteConfigs) => {
    const styles = StyleSheet.create({
        tabBar: {
            height: 80,
            borderTopWidth: 2,
            borderTopColor: '#DEDEDE',
        },
    });

    const tabNavigator = createBottomTabNavigator(RouteConfigs, {
        tabBarOptions: {
            showLabel: false,
            style: styles.tabBar,
        },
    });

    return tabNavigator;
};