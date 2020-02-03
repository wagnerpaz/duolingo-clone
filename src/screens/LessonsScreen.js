import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';

import useHeader from '../hooks/useHeader';

const LessonsScreen = ({navigation}) => {
    useHeader('lessons', navigation);

    return (
        <>
            <SafeAreaView style={styles.content}>
                <Text>Lessons Screen</Text>
            </SafeAreaView>
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