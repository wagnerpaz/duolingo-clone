import React, {useState, useContext, useEffect} from 'react';
import {View, Text, Animated, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useSafeArea} from 'react-native-safe-area-context';

import LessonsContext from '../context/LessonsContext';
import ObfuscateContext from '../context/ObfuscatorContext'; 

import useAnimationShowStyler from '../hooks/useAnimationShowStyler';

import CountryFlagIcon from './CountryFlagIcon';
import LessonScoreIcon from './LessonScoreIcon';
import LanguageScroll from './LanguageScroll';

const LessonsHeader = () => {
    const insets = useSafeArea();

    const {state: {enrolledLanguages}} = useContext(LessonsContext);

    const {obfuscate, deobfuscate, addListener, removeListener} = useContext(ObfuscateContext);

    useEffect(() => {
        const listener = addListener(() => {
            hidePanel();
        });
        return () => {
            removeListener(listener);
        }
    }, []);

    const [panelScrollStyle, showPanel, hidePanel, panelShown] = useAnimationShowStyler({
        initialValue: -80,
        finalValue: 50 + insets.top,
        durationShow: 500,
        durationHide: 200,
        stylize: function (value) {
            return {top: value};
        },
    });

    const panelPress = () => {
        if(!panelShown) {
            showPanel();
            obfuscate();
        }
        else {
            hidePanel();
            deobfuscate();
        }
    };
    
    return (
        <View>
            <Animated.View style={{...styles.detailPanel, ...panelScrollStyle}}>
                <LanguageScroll/>
            </Animated.View>
            <SafeAreaView style={styles.container} forceInset={{top: 'always'}}>
                <View style={styles.flagArea}>
                    <TouchableOpacity onPress={panelPress}>
                        <CountryFlagIcon country={enrolledLanguages.find( language => language.current).id}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.countersArea}>
                    <LessonScoreIcon icon="crown" color="#FFD700"/>
                    <LessonScoreIcon icon="fire" color="#FC7405" spacing={-5}/>
                    <LessonScoreIcon icon="jewel" color="#E10531" spacing={-2} iconSizing={-4}/>
                </View>
            </SafeAreaView>
        </View>
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
    }
});

export default LessonsHeader;