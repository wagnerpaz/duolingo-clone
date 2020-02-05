import {getFlag} from '../../res/flags/countryFlags';

export default {
    enrolledLanguages: [{
        id: getFlag('brazil').country,
        text: 'Portuguese',
        image: getFlag('brazil').image,
        current: true,
    }, {
        id: getFlag('united-states-of-america').country,
        text: 'English',
        image: getFlag('united-states-of-america').image,
    }, {
        id: getFlag('spain').country,
        text: 'Spanish',
        image: getFlag('spain').image,
    }, {
        id: getFlag('japan').country,
        text: 'Japanese',
        image: getFlag('japan').image,
    }]
};