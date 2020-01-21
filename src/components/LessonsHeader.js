import React from 'react';
import {View, StyleSheet} from 'react-native';

import CountryFlagIcon from './CountryFlagIcon';
import LessonScoreIcon from './LessonScoreIcon';

const LessonsHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.flagArea}>
                <CountryFlagIcon country="brazil"/>
            </View>
            <View style={styles.countersArea}>
                <LessonScoreIcon icon="crown" color="#FFD700"/>
                <LessonScoreIcon icon="fire" color="#FC7405" spacing={-5}/>
                <LessonScoreIcon icon="jewel" color="#E10531" spacing={-2} iconSizing={-4}/>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        borderBottomWidth: 2,
        borderBottomColor: '#DEDEDE',
        flexDirection: 'row',
        alignItems: 'center',
    },
    flagArea: {
        marginLeft: 10,
    },
    countersArea: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
    },
});

export default LessonsHeader;