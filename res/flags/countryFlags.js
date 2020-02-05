//https://www.flaticon.com/packs/countrys-flags/2

const countryFlags = [{
    country: 'brazil',
    image: require('../../res/flags/brazil.png'),
}, {
    country: 'united-states-of-america',
    image: require('../../res/flags/united-states-of-america.png'),
}, {
    country: 'spain',
    image: require('../../res/flags/spain.png'),
}, {
    country: 'japan',
    image: require('../../res/flags/japan.png'),
}];

export default countryFlags;

export const getFlag = id => {
    return countryFlags.find((item) => item.country === id);
};