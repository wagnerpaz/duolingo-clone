import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';
import LessonsHeader from '../components/LessonsHeader';

const LessonsScreen = () => {
    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <LessonsHeader/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

LessonsScreen.navigationOptions = {
    ...includeTabBarIcon('book', 'green'),
};

export default LessonsScreen;