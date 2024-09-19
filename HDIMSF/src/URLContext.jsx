import React, { createContext } from 'react';

const URLContext = createContext();

const URLProvider = ({ children }) => {
    const ip = "192.168.250.106";
    const url = `http://${ip}:8000/`;

    return (
        <URLContext.Provider value={{url}}>
            {children}
        </URLContext.Provider>
    )
}

export { URLProvider, URLContext };