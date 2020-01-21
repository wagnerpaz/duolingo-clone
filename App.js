import React from 'react';
import {StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import createMainBottomTabNavigator from './src/components/createMainBottomTabNavigator';
import LessonsScreen from './src/screens/LessonsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LeagueScreen from './src/screens/LeagueScreen';
import StoreScreen from './src/screens/StoreScreen';

const tabNavigator = createMainBottomTabNavigator({
  Lessons: LessonsScreen,
  Profile: ProfileScreen,
  League: LeagueScreen,
  Store: StoreScreen,
});

const styles = StyleSheet.create({});

export default createAppContainer(tabNavigator);