import React, {useState} from 'react';
import {View, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

import useVisualEffects from '../hooks/useVisualEffects';
import useAnimationShowStyler from '../hooks/useAnimationShowStyler';

import CountryFlagIcon from './CountryFlagIcon';
import LessonScoreIcon from './LessonScoreIcon';

const LessonsHeader = () => {
    const [panelScrollStyle, showPanel, hidePanel, panelShown] = useAnimationShowStyler({
        initialValue: -80,
        finalValue: 50,
        durationShow: 500,
        durationHide: 200,
        stylize: function (value) {
            return {top: value};
        },
    });
    const [showDarkLayer, hideDarkLayer] = useVisualEffects();

    const panelPress = () => {
        if(!panelShown) {
            showPanel();
            showDarkLayer();
        }
        else {
            hidePanel();
            hideDarkLayer();
        }
    };
    
    return (
        <>
            <Animated.View style={{...styles.detailPanel, ...panelScrollStyle}}/>
            <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
                <View style={styles.flagArea}>
                    <TouchableOpacity onPress={panelPress}>
                        <CountryFlagIcon country="brazil"/>
                    </TouchableOpacity>
                </View>
                <View style={styles.countersArea}>
                    <LessonScoreIcon icon="crown" color="#FFD700"/>
                    <LessonScoreIcon icon="fire" color="#FC7405" spacing={-5}/>
                    <LessonScoreIcon icon="jewel" color="#E10531" spacing={-2} iconSizing={-4}/>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        height: 50,
        zIndex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderBottomColor: '#DEDEDE',
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
    detailPanel: {
        position: 'absolute',
        top: -80,
        left: 0,
        right: 0,
        zIndex: 2,
        height: 130,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#DEDEDE',
    }
});

export default LessonsHeader;