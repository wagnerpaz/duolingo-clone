import React, { useState } from 'react';

const Context = React.createContext();

export const HeaderProvider = ({children, above}) => {
    const [header, setHeader] = useState(null);

    return (
        <Context.Provider value={{header, setHeader}}>
            {children}
        </Context.Provider>
    );
};

export default Context;