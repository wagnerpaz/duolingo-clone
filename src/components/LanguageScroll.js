import React, { useContext, useRef } from 'react';
import {View, Text, TouchableOpacity, Image, FlatList,StyleSheet} from 'react-native';

import countryFlags from '../../res/flags/countryFlags';
import LessonsContext from '../context/LessonsContext';

import LanguageItem from './LanguageItem';

const LanguageScroll = () => {
    const {state: {enrolledLanguages : data}, changeLanguage} = useContext(LessonsContext);
    const flatList = useRef(null);

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatList}
                horizontal
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <LanguageItem item={item} onPress={() => {
                        changeLanguage(item.id);
                        flatList.current.scrollToIndex({animated: true, index: 0});
                    }}/>
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