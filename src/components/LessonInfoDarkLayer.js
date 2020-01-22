import React from 'react';
import {Animated, StyleSheet} from 'react-native';

const LessonInfoDarkLayer = ({style, showing}) => {
    return showing ? <Animated.View style={{...styles.fadedBackground, ...style}}/> : null;
}

const styles = StyleSheet.create({
    fadedBackground: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        zIndex: 1,
    },
});

export default LessonInfoDarkLayer;