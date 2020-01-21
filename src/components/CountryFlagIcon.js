import React from 'react';
import {Image, StyleSheet} from 'react-native';

import countryFlags from '../../res/flags/countryFlags';

const CountryFlagIcon = ({country = 'brazil'}) => {
    return <Image style={styles.flag} source={countryFlags.find(c => c.country === country).image}/>
};

const styles = StyleSheet.create({
    flag: {
        borderColor: 'red',
        borderRadius: 8,
        height: 30,
        width: 50,
    }
});

export default CountryFlagIcon;