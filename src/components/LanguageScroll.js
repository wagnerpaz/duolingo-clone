import React, { useContext } from 'react';
import {View, Text, TouchableOpacity, Image, FlatList,StyleSheet} from 'react-native';

import countryFlags from '../../res/flags/countryFlags';
import LessonsContext from '../context/LessonsContext';

import LanguageItem from './LanguageItem';

const LanguageScroll = () => {
    const {state: {enrolledLanguages : data}, changeLanguage} = useContext(LessonsContext);
    let flatList;

    return (
        <View style={styles.container}>
            <FlatList
                ref={ref => flatList = ref}
                horizontal
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <LanguageItem item={item} onPress={() => {
                        changeLanguage(item.id);
                        flatList.scrollToIndex({animated: true, index: 0});
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