import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {useSafeArea} from 'react-native-safe-area-context';

import useAnimationShowStyler from '../hooks/useAnimationShowStyler';
import LessonInfoDarkLayer from '../components/LessonInfoDarkLayer';

const Context = React.createContext();

export const VisualEffectsProvider = ({children}) => {
    const insets = useSafeArea();

    const darkLayerOpacityAnim = {
        initialValue: 0,
        finalValue: 0.3,
        durationShow: 500,
        durationHide: 200,
        stylize: function (value) {
            return {opacity: value};
        }
    };
    
    const darkLayerTopGapAnim = {
        initialValue: 50 + insets.top,
        finalValue: 180,
        durationShow: 500,
        durationHide: 200,
        stylize: function (value) {
            return {top: value};
        }
    };
    
    const [darkLayerAnimStyle, showDarkLayer, hideDarkLayer, showingDarkLayer] = useAnimationShowStyler([
        darkLayerOpacityAnim,
        darkLayerTopGapAnim,
    ]);

    return (
        <Context.Provider value={{showDarkLayer, hideDarkLayer}}>
            <View style={styles.container}>
                <LessonInfoDarkLayer style={{...darkLayerAnimStyle, ...styles.darkLayer}} showing={showingDarkLayer}/>
                <View style={styles.children}>
                    {children}
                </View>
            </View>
        </Context.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        //without the border the children don't share zIndex
        borderWidth: 0,
        borderColor: 'black',
    },
    children: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        zIndex: 0
    },
    darkLayer: {
        zIndex: 1,
    }
});

export default Context;