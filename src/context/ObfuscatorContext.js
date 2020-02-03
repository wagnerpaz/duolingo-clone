import React, { useState } from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {useSafeArea} from 'react-native-safe-area-context';

import useAnimationShowStyler from '../hooks/useAnimationShowStyler';
import DarkLayer from '../components/DarkLayer';

const Context = React.createContext();

export const ObfuscatorProvider = ({children, highlighted}) => {
    const insets = useSafeArea();

    const [listeners, setListeners] = useState([]);

    const addListener = (listener) => {
        setListeners([...listeners, listener]);
    };

    const removeListener = (listener) => {
        setListeners(listeners.splice(listeners.indexOf(listener), 1));
    };

    const darkLayerOpacityAnim = {
        initialValue: 0,
        finalValue: 0.2,
        durationShow: 500,
        durationHide: 200,
        stylize: function (value) {
            return {opacity: value};
        }
    };
    
    const [darkLayerAnimStyle, showDarkLayer, hideDarkLayer, showingDarkLayer] = useAnimationShowStyler([
        darkLayerOpacityAnim,
    ]);

    return (
        <Context.Provider value={{obfuscate: showDarkLayer, deobfuscate: hideDarkLayer, addListener, removeListener}}>
            <View style={styles.container}>
                <View style={styles.children}>
                    {children}
                </View>
                <DarkLayer
                    style={{...darkLayerAnimStyle, ...styles.darkLayer}}
                    showing={showingDarkLayer}
                    onPress={() => {
                        hideDarkLayer();
                        listeners.forEach(listener => {
                            listener();
                        });
                    }}
                />
                <View style={styles.highlighted}>
                    {highlighted}
                </View>
            </View>
        </Context.Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
    },
    children: {
        position: 'absolute',
        ...StyleSheet.absoluteFillObject,
    },
});

export default Context;