import React from 'react';
import {TouchableWithoutFeedback, Animated, StyleSheet} from 'react-native';

const LessonInfoDarkLayer = ({style, showing, onPress}) => {
    return showing ? 
        <TouchableWithoutFeedback style={styles.touchable} onPress={onPress}>
            <Animated.View style={[styles.fadedBackground, style]}/>
        </TouchableWithoutFeedback>
    : null;
}

const styles = StyleSheet.create({
    touchable: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    fadedBackground: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        zIndex: 1,
    },
});

export default LessonInfoDarkLayer;