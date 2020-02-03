import {useContext, useEffect} from 'react';
import HeaderContext from '../context/HeaderContext';    

export default (headerId, navigation) => {
    const {setHeader} = useContext(HeaderContext);
    
    useEffect(() => {
        const didFocusSubscription = navigation.addListener('didFocus', () => {
            setHeader(headerId);
        });

        const didBlurSubscription = navigation.addListener('didBlur', () => {
            setHeader(null);
        });

        return () => {
            didFocusSubscription.remove();
            didBlurSubscription.remove();
        };
    }, []);
};