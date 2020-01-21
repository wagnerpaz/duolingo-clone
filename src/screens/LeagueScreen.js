import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';

const LeagueScreen = () => {
    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <Text>League Screen</Text>
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

LeagueScreen.navigationOptions = {
    ...includeTabBarIcon('shield', 'orange')
};

export default LeagueScreen;