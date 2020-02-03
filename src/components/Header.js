import React, {useContext} from 'react';

import HeaderContext from '../context/HeaderContext';
import LessonsHeader from '../components/LessonsHeader';

const Header = () => {
    const {header, setHeader} = useContext(HeaderContext);

    if(header === 'lessons') {
        return <LessonsHeader/>;
    }
    
    return null;
};

export default Header;