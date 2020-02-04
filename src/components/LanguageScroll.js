import React from 'react';
import {View, Text, Image, FlatList,StyleSheet} from 'react-native';

import countryFlags from '../../res/flags/countryFlags';

import LanguageItem from './LanguageItem';

const LanguageScroll = () => {
    const data = [{
        id: getFlag('brazil').country,
        text: 'Portuguese',
        image: getFlag('brazil').image,
        selected: true,
    }, {
        id: getFlag('united-states-of-america').country,
        text: 'English',
        image: getFlag('united-states-of-america').image,
    }, {
        id: getFlag('spain').country,
        text: 'Spanish',
        image: getFlag('spain').image,
    }, {
        id: getFlag('japan').country,
        text: 'Japanese',
        image: getFlag('japan').image,
    }];

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <LanguageItem item={item} selected={item.selected}/>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const getFlag = id => {
    return countryFlags.find((item) => item.country === id);
};

export default LanguageScroll;