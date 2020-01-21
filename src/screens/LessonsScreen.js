import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';

const LessonsScreen = () => {
    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <Text>Lessons Screen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
});

LessonsScreen.navigationOptions = {
    ...includeTabBarIcon('book', 'green'),
};

export default LessonsScreen;