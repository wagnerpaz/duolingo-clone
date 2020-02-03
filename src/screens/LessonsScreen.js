import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';
import LessonsHeader from '../components/LessonsHeader';

const LessonsScreen = () => {
    return (
        <>
            <SafeAreaView style={styles.content}>
                <Text>Lessons Screen</Text>
            </SafeAreaView>
            <LessonsHeader/>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        paddingTop: 80,
        flex: 1,
    },
});

LessonsScreen.navigationOptions = {
    ...includeTabBarIcon('book', 'green'),
};

export default LessonsScreen;