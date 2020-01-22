import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';

export default (initalValue, finalValue, forwardDuration, backwardDuration) => {
    const [showing, setShowing] = useState(false);
    const [animatedValue] = useState(new Animated.Value(initalValue));

    const show = () => {
        setShowing(true);
        Animated.timing(animatedValue, {
            toValue: finalValue,
            duration: forwardDuration,
        }).start();
    };

    const hide = () => {
        Animated.timing(animatedValue, {
            toValue: initalValue,
            duration: backwardDuration,
        }).start();
    };

    useEffect(() => {
        const listener = ({value}) => {
            if(value === initalValue) {
                setShowing(false);
            }
        };
    
        const listenerId = animatedValue.addListener(listener);

        return () => {
            animatedValue.removeListener(listenerId);
        }
    }, [animatedValue]);

    return [animatedValue, show, hide, showing];
};