import React, { useEffect } from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {Svg, Circle} from 'react-native-svg';

const {interpolate, multiply} = Animated;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircleProgress = ({style, children, size, strokeWidth, strokeColor, strokeBackgroundColor, rotation = 0, progress = 0}) => {
    let progressAnimated = new Animated.Value(1 - progress);

    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    progressAnimated = progressAnimated.interpolate({
        inputRange: [0, 1],
        outputRange: [0, Math.PI * 2]
    });
    progressAnimated = Animated.multiply(progressAnimated, radius);

    // useEffect(() => {
    //     Animated.timing(progressAnimated, {
    //         toValue: 1 - progress,
    //         duration: 1000,
    //     }).start();
    // }, [progress]);

    const styles = StyleSheet.create({
        container: {
            width: size,
            height: size,
        },
        svg: {
            position: 'absolute',
            ...StyleSheet.absoluteFillObject,
        },
    })

    return (
        <View style={style}>
            <Svg style={styles.svg} height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
                <Circle
                    stroke={strokeBackgroundColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    {...{strokeWidth}}
                />
                <AnimatedCircle
                    transform={`rotate(${rotation} 50 50)`}
                    stroke={strokeColor}
                    fill="none"
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeDasharray={`${circumference} ${circumference}`}
                    {...{strokeWidth, strokeDashoffset: progressAnimated}}
                />
            </Svg>
            {children}
        </View>
    );
}


export default CircleProgress;