import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import {includeTabBarIcon} from '../components/TabBarIcon';

const StoreScreen = () => {
    return (
        <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
            <Text>Store Screen</Text>
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

StoreScreen.navigationOptions = {
    ...includeTabBarIcon('shopping-bag', 'red'),
};

export default StoreScreen;