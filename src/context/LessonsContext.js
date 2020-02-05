import React, { useReducer } from 'react';
import lessonsInitialState from './lessonsInitialState';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'change_language': {
            const enrolledLanguages = state.enrolledLanguages.map( language => ({...language, current: language.id === action.payload}));
            const current = enrolledLanguages.find( language => language.current);
            enrolledLanguages.splice( enrolledLanguages.indexOf(current), 1);
            enrolledLanguages.unshift(current);
            return {...state, enrolledLanguages };
        }
        default:
            return state;
    }
};

export const LessonsProvider = ({children, above}) => {
    const [state, dispatch] = useReducer(reducer, lessonsInitialState);


    const changeLanguage = (languageId) => {
        dispatch({type: 'change_language', payload: languageId});
    };

    return (
        <Context.Provider value={{state, changeLanguage}}>
            {children}
        </Context.Provider>
    );
};

export default Context;