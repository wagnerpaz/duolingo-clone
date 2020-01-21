import React from 'react';
import {View, StyleSheet} from 'react-native';

import LessonScoreIcon from './LessonScoreIcon';

const LessonsHeader = () => {
    return (
        <View style={styles.container}>
            <LessonScoreIcon icon="crown" color="#FFD700"/>
            <LessonScoreIcon icon="fire" color="#FC7405" spacing={-5}/>
            <LessonScoreIcon icon="jewel" color="#E10531" spacing={-2} iconSizing={-4}/>
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
        justifyContent: 'space-around',
    },
});

export default LessonsHeader;