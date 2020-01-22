import {useContext} from 'react';
import VisualEffectsContext from '../context/VisualEffectsContext';

export default () => {
    const {showDarkLayer, hideDarkLayer} = useContext(VisualEffectsContext);
    return [showDarkLayer, hideDarkLayer];
};