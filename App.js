import React from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import { HeaderProvider } from './src/context/HeaderContext';
import { ObfuscatorProvider } from './src/context/ObfuscatorContext';

import createMainBottomTabNavigator from './src/components/createMainBottomTabNavigator';

import LessonsScreen from './src/screens/LessonsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LeagueScreen from './src/screens/LeagueScreen';
import StoreScreen from './src/screens/StoreScreen';

import Header from './src/components/Header';

const tabNavigator = createMainBottomTabNavigator({
  Lessons: LessonsScreen,
  Profile: ProfileScreen,
  League: LeagueScreen,
  Store: StoreScreen,
});

const styles = StyleSheet.create({});

const App = createAppContainer(tabNavigator);

export default () => (
  <SafeAreaProvider>
    <HeaderProvider>
      <ObfuscatorProvider highlighted={<Header/>}>
          <App/>
      </ObfuscatorProvider>
    </HeaderProvider>
  </SafeAreaProvider>
);